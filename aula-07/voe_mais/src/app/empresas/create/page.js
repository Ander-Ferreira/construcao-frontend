
'use client'
import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Page() {
    
    function salvar(dados){

        console.log(dados)


    }
    
    
    
    return (
        <Pagina titulo='Create'>

            <>

                <Formik

                    initialValues={{ nome: '', logo: '' }}
                    onSubmit={values => salvar(values)}

                >

                    {({

                        values,
                        handleChange,
                        handleSubmit,

                    }) => (

                        <Form>
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control 
                                 type="text"
                                 name='nome'
                                 valeu={values.nome}
                                 onChange={handleChange('nome')}
                                
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Logo</Form.Label>
                                <Form.Control 
                                 type="text"
                                 name='logo'
                                 valeu={values.logo}
                                 onChange={handleChange('logo')} />
                            </Form.Group>

                            <div className="text-center">

                                <Button onClick={handleSubmit} variant='success'>

                                    <FaCheck /> Salvar

                                </Button>

                                <Link href="/empresas/" className="btn btn-danger ms-3">

                                    <FaArrowLeft /> Voltar

                                </Link>
                            </div>

                        </Form>

                    )}

                </Formik>


            </>



        </Pagina>

    )

}