import { database } from '../firebase';

export default async function getSubmissions(){
    let review = await database.ref('/submissions').once('value').then((snapshot) => {
        return snapshot.val();
      });
      console.log('are we getting submissions back?', review);
      return review;
}
