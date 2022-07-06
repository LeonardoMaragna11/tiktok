import { useRouter } from "next/router"
import { createClient } from '@supabase/supabase-js'
import React from "react"

const supabaseUrl = 'https://krxexdbhkajbanxqtoeq.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyeGV4ZGJoa2FqYmFueHF0b2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcxMjM4ODQsImV4cCI6MTk3MjY5OTg4NH0.Enk0wttjPv0tEwTiC-hJywfJ2Tsjzw4KyCbbncy3Zx8'
const supabase = createClient(supabaseUrl, SUPABASE_KEY)

async function logar(email, senha, cb){
  let { data: Usuario, error } = await supabase
  .from('Usuario')
  .select('*')
  .eq('email_us', email)
  .eq('senha_us', senha)
  
  if(error == null && Usuario.length > 0 ){
    return Usuario;

  }else{
    return 'Erro';
  }
}

export default function Home() {
  const [email, setEmail] = React.useState()
  const [senha, setSenha] = React.useState()

  const route = useRouter();

  return (
    <>
      <h1>BEM VINDO AO LOGIN</h1>
      <form>
        <input type={'email'} onChange={(event)=>{ setEmail(event.target.value) }}/>
        <input type={'password'} onChange={(event)=>{ setSenha(event.target.value) }}/>
        <input type={'submit'} value='Logar' onClick={async ()=>{
          event.preventDefault()
          let verifica = await logar(email, senha)
          if( verifica != 'Erro'){
            verifica.map((user)=>{
              route.push(`perfil/?id_us=${user.id_us}&key_us=${user.key_us}`)
            })
          }else{
            alert('usuario ou senha incorretos')
          }
        }}/>
      </form>
    </>
  ) 
}
