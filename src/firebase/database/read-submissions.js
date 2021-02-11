import { database } from '../firebase';

export default function getSubmissions(){
    let review = database.ref('/submissions').once('value').then((snapshot) => {
        return snapshot.val();
      });
      console.log('are we getting submissions back?', review);
      return review;
}
