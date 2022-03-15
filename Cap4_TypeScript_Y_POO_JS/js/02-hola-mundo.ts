console.log("Hola Mundo con TypeScript");
/*
    Para que se genere el archivo.js  con la info del archivo.ts
    se debe compilar primero, se compila hiendo directamente a la ubicacion 
    del archivo desde el terminal y cuando ya se este en la carpeta del archivo 
    se coloca -> tsc nombre-archivo.ts

    !!!!!PARA COMPILAR LOS CAMBIOS AUTOMATICAMENTE !!!!!!!
    se hace el mismo proceso de ubicar los archivos ts en la carpeta en la que esten y 
    se escribe 

    -> tsc -w *.ts 

    esto en una consola bash, no se puede desde el cmd por que no esta preparada para recibir 
    caraceteres especiales o algo asi...

*/
alert("Hola Mundo con TypeScript");