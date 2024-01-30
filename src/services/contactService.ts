import { InputData } from 'schemas/form.input.schema';

const formspree_url = 'https://formspree.io/f/xdovlonj';

export async function contactService(data: InputData) {
  try {
    const response = await fetch(formspree_url, {
      cache: 'no-cache',
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('this is the horrible error' + error);
    return { Error_Message: `Operation failed, caused by: ${error} ` };
  }
}
