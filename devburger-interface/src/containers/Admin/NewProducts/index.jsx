import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Image } from "@phosphor-icons/react"
import * as yup from "yup";
import { Container, ErrorMensage, Form, Input, InputGroup, Label, LabelUpload, Select, SubmitButton } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

const schema = yup.object({
    name: yup.string().required(),
    price: yup.number().positive().required(),
    category: yup.object().required(),
    file: yup.mixed(),
});

export function NewProducts(){
const [fileName, setFileName] = useState(null);
const [categories, setCategories] = useState([]);


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            setCategories(data)
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
    
    const onSubmit = (data) => {
        console.log(data)
    }

    return(
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
                    <input 
                    type= 'file'
                    {...register('file')}
                    accept="image/png, image/jpeg"
                    onChange={(value) => {
                        setFileName(value?.target?.files[0]?.name);
                        register('file').onChange(value)
                    }}
                    />
                    {fileName || 'upload do Produto'}
                    </LabelUpload>
                </InputGroup>

                 <InputGroup>
                    <Label>Categoria</Label>
                    <Controller 
                        name="category"
                        control={control}
                        render={ (field) => (
                
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
                </InputGroup>

                <SubmitButton>Edicionar Produto</SubmitButton>
            </Form>
        </Container>
    )
}