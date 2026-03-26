import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Image } from '@phosphor-icons/react';
import * as yup from 'yup';
import { useLocation } from 'react-router-dom';
import { 
    Container, 
    ErrorMensage, 
    Form, 
    Input, 
    InputGroup, 
    Label, 
    LabelUpload, 
    Select, 
    SubmitButton,
    ContainerCheckBox 
} from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';

const schema = yup.object({
    name: yup.string().required('Digite o nome'),
    price: yup.number().positive().required('Digite o preço do Produto').typeError('Digite o preço do Produto'),
    category: yup.object().required('Escolha uma categoria'),
    offer: yup.bool(),
});

export function EditProdutcs() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);

    const {state: {product}} = useLocation()


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            setCategories(data);
        };

        loadCategories()
    }, []);


    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });



    const onSubmit = async (data) => {
        const productFormData = new FormData();

        console.log(data)

        productFormData.append('name', data.name);
        productFormData.append('price', data.price * 100);
        productFormData.append('category_id', data.category.id);
        productFormData.append('file', data.file[0]);
        productFormData.append('offer', data.offer);



        await toast.promise(api.put(`/products/${product.id}`, productFormData), {
            pending: 'Editando o Produto...',
            success: 'Produto editado com sucesso',
            error: 'Falha ao editar o produto, tente novamente',
        });
    };



    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input 
                        type="text" 
                        {...register('name')}
                        defaultValue={product.name} />
                    <ErrorMensage>{errors?.name?.message}</ErrorMensage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input 
                    type="number" 
                    {...register('price')}
                    defaultValue={product.price / 100}
                     />
                    <ErrorMensage>{errors?.price?.message}</ErrorMensage>
                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <Image />
                        <Controller
                            name="file"
                            control={control}
                            defaultValue={null}
                            render={({ field }) => (
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    onChange={(value) => {
                                        const files = value.target.files;

                                        setFileName(files[0]?.name);

                                        field.onChange(files);
                                    }}
                                />
                            )}
                        />
                        {fileName || 'upload do Produto'}
                    </LabelUpload>
                    <ErrorMensage>{errors?.file?.message}</ErrorMensage>
                </InputGroup>

                <InputGroup>
                    <Label>Categoria</Label>
                    <Controller
                        name="category"
                        control={control}
                        defaultValue={product.category}
                        render={({ field }) => (

                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Categorias"
                                menuPortalTarget={document.body}
                                defaultValue={product.category}
                            />
                        )}
                    />

                    <ErrorMensage>{errors?.category?.message}</ErrorMensage>
                </InputGroup>

                <InputGroup>
                        <ContainerCheckBox>
                            <input 
                                type='checkbox' 
                                defaultChecked={product.offer}
                                {...register('offer')}
                            />
                            <Label>Produto em Oferta?</Label>
                        </ContainerCheckBox>
                </InputGroup>

                <SubmitButton>Editar Produto</SubmitButton>
            </Form>
        </Container>
    )
}