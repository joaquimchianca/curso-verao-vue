function calcular(e) {
    e.preventDefault()
    //calcular a media ponderada

    let triLinguagens = Number(document.getElementById("tri_linguagens").value)
    let pesoLinguagens = Number(document.getElementById("peso_linguagens").value)

    let triMatematica = Number(document.getElementById("tri_matematica").value)
    let pesoMatematica = Number(document.getElementById("peso_matematica").value)

    let triHumanas = Number(document.getElementById("tri_humanas").value)
    let pesoHumanas = Number(document.getElementById("peso_humanas").value)

    let triNaturezas = Number(document.getElementById("tri_naturezas").value)
    let pesoNaturezas = Number(document.getElementById("peso_naturezas").value)

    let triRedacao = Number(document.getElementById("tri_redacao").value)
    let pesoRedacao = Number(document.getElementById("peso_redacao").value)

    let media = ((triLinguagens * pesoLinguagens) + (triMatematica * pesoMatematica) + (triHumanas * pesoHumanas) + (triNaturezas + pesoNaturezas) + (triRedacao * pesoRedacao)) / (pesoHumanas + pesoLinguagens + pesoMatematica + pesoNaturezas + pesoRedacao)


    document.getElementById("resultado_texto").innerHTML = `<p>${media.toFixed(2)}</p>`
}

document.getElementById("btn_calcular").addEventListener("click", calcular)
