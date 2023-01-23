const express = require("express")
const dotenv =  require("dotenv")

dotenv.config()

const app = express()

const PORT = process.env.PUERTO ||8080

app.get("/info", (req,res)=>{
    const info = {
        argumentoDeEntrada:process.title,
        NombreDeLaPlataforma:process.platform,
        VersiónDeNodeJs:process.version,
        rss:process.memoryUsage(),
        ProcessId:process.pid,
        CarpetaDelProyecto:process.cwd()

    }

    res.json({info})
})


app.listen(PORT,()=>{
    console.log(`Escuchanco en el puerto ${PORT}`)
})