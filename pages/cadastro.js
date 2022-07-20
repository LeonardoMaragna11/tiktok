import React from "react"
import { useRouter } from "next/router"
import { createClient } from '@supabase/supabase-js'
import erros from "./erros"
import uploadImg from "../utils/uploadImg"
const supabaseUrl = 'https://krxexdbhkajbanxqtoeq.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyeGV4ZGJoa2FqYmFueHF0b2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcxMjM4ODQsImV4cCI6MTk3MjY5OTg4NH0.Enk0wttjPv0tEwTiC-hJywfJ2Tsjzw4KyCbbncy3Zx8'
const supabase = createClient(supabaseUrl, SUPABASE_KEY)

async function cadastrar(usuario)
{
        let res = await supabase
        .from('Usuario')
        .insert([usuario])
        
        if(res.error){
            if (res.error.message == 'duplicate key value violates unique constraint "Usuario_email_us_key"'){
                throw new erros("Esse email ja está cadastrado")
            }else{
                throw new erros("Erro inespeperado, entre em contato com o desesvolvido")
            }
        }
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

    const route = useRouter()

    return(
        <>
            <nav>
                <h1>Cadastre-se</h1>
            </nav>

            <form>

                <input onChange={(event)=>{setNome(event.target.value)}} placeholder="Nome" type={'text'}/>

                <input onChange={(event)=>{setSobrenome(event.target.value)}} placeholder="Sobrenome" type={'text'}/> 

                <input onChange={(event)=>{setUsername(event.target.value)}} placeholder="Username" type={'text'}/> 

                <textarea onChange={(event)=>{setDescricao(event.target.value)}} placeholder="Descrição" />

                <input onChange={(event)=>{setSenha(event.target.value)}} placeholder="Senha" type={'password'}/> 

                <input onChange={(event)=>{setEmail(event.target.value)}} placeholder="Email" type={'email'}/> 

                <input onChange={(event)=>{setTelefone(event.target.value)}} placeholder="Telefone" type={'text'}/> 

                <input onChange={(event)=>{setData(event.target.value)}} type={'date'}/>

                <label className="InputImagem"> Coloque sua imagem
                    <input onChange={(event)=>{setImagem((event.target.files[0]))}} type={'file'} name="img"/>
                </label>

                <input value={'Cadastrar'} type={'submit'} onClick={(event)=>{
                    event.preventDefault()

                    const usuario ={
                        nome_us:nome,
                        sobrenome_us: sobrenome,
                        img_us: imagem.name,
                        descricao_us: descricao,
                        senha_us: senha,
                        email_us: email,
                        telefone_us: telefone,
                        dataNascimento_us: data,
                        username_us: username
                    }

                    try{
                        cadastrar(usuario)
                        uploadImg(imagem)
                        route.push('')
                    }catch(e){
                        console.log(e);
                    }
                }}/>

            </form>
        </>
    )
}