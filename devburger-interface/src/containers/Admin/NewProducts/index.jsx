import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Image } from "@phosphor-icons/react"
import * as yup from "yup";
import { Container, ErrorMensage, Form, Input, InputGroup, Label, LabelUpload, Select, SubmitButton } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

const schema = yup.object({
    name: yup.string().required('Digite o n0me'),
    price: yup.number().positive().required('Digite o preço do Produto').typeError('Digite o preço do Produto'),
    category: yup.object().required('Escolha uma categoria'),
    file: yup.mixed().test('required', 'Escolha um arquivo para continuar', (value) => {
        return value && value instanceof FileList && value.length > 0;
    }).test('fileSize', 'Carregue arquivo até 3mb', (value) => {
        return value && value instanceof FileList && value.length > 0 && value[0].size <= 3 * 1024 * 1024;
    }).test('type', 'Carregue imagens PNG ou JPEG', (value) => {
        return value && value instanceof FileList && value.length > 0 && ['image/png', 'image/jpeg'].includes(value[0].type)
    })
});

export function NewProducts() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);


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



        await toast.promise(api.post('/products', productFormData), {
            pending: 'Adicionando o Produto...',
            success: 'Produto Criado com sucesso',
            error: 'Falha ao adcionar o produto, tente novamente',
        });
    };



    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register('name')} />
                    <ErrorMensage>{errors?.name?.message}</ErrorMensage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number" {...register('price')} />
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
                        render={({ field }) => (

                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Categorias"
                                menuPortalTarget={document.body}
                            />
                        )}
                    />

                    <ErrorMensage>{errors?.category?.message}</ErrorMensage>
                </InputGroup>

                <SubmitButton>Edicionar Produto</SubmitButton>
            </Form>
        </Container>
    )
}