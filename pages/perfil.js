import { useRouter } from "next/router";
import React from "react";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://krxexdbhkajbanxqtoeq.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyeGV4ZGJoa2FqYmFueHF0b2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcxMjM4ODQsImV4cCI6MTk3MjY5OTg4NH0.Enk0wttjPv0tEwTiC-hJywfJ2Tsjzw4KyCbbncy3Zx8'
const supabase = createClient(supabaseUrl, SUPABASE_KEY)

async function buscarDados(userId){
    let { data: Usuario, error } = await supabase
    .from('Usuario')
    .select('*')
    .eq('id_us', userId)
  
  if(error == null && Usuario.length > 0 ){
    return Usuario;

  }else{
    return 'Erro';
  }
    
}

export default function Perfil(){
    const route = useRouter()
    const userId = route.query.id_us
    const userKey = route.query.key_us

    if(userKey != null){
        return(
            <>

                <h1>Vamos conseguir, {userKey}</h1>
            </>
        )
    }else{
        return(
            <>a</>
        )
    }
}
