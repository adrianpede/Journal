import { fileUpload } from "../../src/helpers/fileUpload";



describe('Pruebas en fileUpload', () => {
    
    test('debe subir el archivo correctamente a cloudinary',async () => { 
        const imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7s7ulB5NXGIGWlc-mE3iVBEmEmzzOf6e9Q&usqp=CAU';
        const resp = await fetch(imageURL);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');
     })


 })