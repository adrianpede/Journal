import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';
cloudinary.config({
  cloud_name:'diuxvqu5g',
  api_key:'357834788894566',
  api_secret:'Zn8FvIMS6nlFmJjGZurKzRjQBcI',
  secure: true
});

describe('Pruebas en fileUpload', () => {

  test('debe subir el archivo correctamente a cloudinary', async() => { 

   const imageUrl = 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg';
   const resp = await fetch(imageUrl);
   const blob = await  resp.blob();
   const file = new File([blob],'foto.jpg')
   

   const url = await  fileUpload(file);
   expect(typeof url).toBe('string');
   //console.log(url)
   const segments = url.split('/');
   const imageId = segments[segments.length-1].replace('.jpg','');
   const cloudResp = await cloudinary.api.delete_resources(['journal/'+ imageId],{
    resource_type:'image'
   });
   //console.log({cloudResp})
  });  

  test('debe retornar null', async() => { 
    const file = new File([],'foto.jpg')
    const url = await  fileUpload(file);
    expect( url).toBe(null);
   })
  
    
     });