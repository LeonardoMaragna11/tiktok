import React from "react"
import { useRouter } from "next/router"
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://krxexdbhkajbanxqtoeq.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyeGV4ZGJoa2FqYmFueHF0b2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcxMjM4ODQsImV4cCI6MTk3MjY5OTg4NH0.Enk0wttjPv0tEwTiC-hJywfJ2Tsjzw4KyCbbncy3Zx8'
const supabase = createClient(supabaseUrl, SUPABASE_KEY)

async function cadastrar(imagem){
    await fs.copyFileSync(imagem, '../assets/')

}

export default function Cadastro(){
    const [nome, setNome] = React.useState()
    const [sobrenome, setSobrenome] = React.useState()
    const [username, setUsername] = React.useState()
    const [descricao, setDescricao] = React.useState()
    const [email, setEmail] = React.useState()
    const [senha, setSenha] = React.useState()
    const [telefone, setTelefone] = React.useState()
    const [data, setData] = React.useState()
    const [imagem, setImagem] = React.useState()

    return(
        <>
            <h1>Cadastre-se</h1>

            <form>

                <input onChange={(event)=>{setNome(event.target.value)}} placeholder="Nome" type={'text'}/>

                <input onChange={(event)=>{setSobrenome(event.target.value)}} placeholder="Sobrenome" type={'text'}/> 

                <input onChange={(event)=>{setUsername(event.target.value)}} placeholder="Username" type={'text'}/> 

                <input type={'file'} onChange={(event)=>{setImagem((event.target.files[0]))}}/>

                <textarea onChange={(event)=>{setDescricao(event.target.value)}} placeholder="Descrição" />

                <input onChange={(event)=>{setSenha(event.target.value)}} placeholder="Senha" type={'password'}/> 

                <input onChange={(event)=>{setEmail(event.target.value)}} placeholder="Email" type={'email'}/> 

                <input onChange={(event)=>{setTelefone(event.target.value)}} placeholder="Telefone" type={'text'}/> 

                <input onChange={(event)=>{setData(event.target.value)}} type={'date'}/>
                
                <input value={'Cadastrar'} type={'submit'} onClick={(event)=>{
                    event.preventDefault()
                    let nomeImg = imagem.name
                    console.log(imagem);
                    console.log(nomeImg);
                }}/>

            </form>
        </>
    )
}