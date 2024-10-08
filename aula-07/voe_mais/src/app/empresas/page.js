
'use client'

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";

export default function Page(){
    return(
       <Pagina titulo='Empresas'>

        <>

        <Link href="/empresas/create" className="btn btn-primary mb-3">


        <FaPlusCircle /> Novo



        </Link>
        
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Logo</th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Gol</td>
          <td>///</td>
          <td>///</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Latan</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Azul</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        
        
        
        
        
        
        
        
        
        
        
        </>







       </Pagina>

    )

}