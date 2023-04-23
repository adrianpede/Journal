import { fileUpload } from '../../src/helpers/fileUpload';

describe('Pruebas en fileUpload', () => {

  test('debe subir el archivo correctamente a cloudinary', async() => { 

   const imageUrl = 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg';
   const resp = await fetch(imageUrl);
   const blob = await  resp.blob();
   const file = new File([blob],'foto.jpg')
   console.log(file);

   const url = await  fileUpload(file);
   expect(typeof url).toBe('string');
  });  
  
    
     });