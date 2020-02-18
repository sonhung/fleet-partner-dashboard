import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';

import { firebaseConfig } from '../../../config';

firebase.initializeApp(firebaseConfig);

const RequestRealtimeBlock = () => {
  const [data, setData] = useState(0)

  useEffect(() => {
    let ref = firebase.database().ref('/');
    ref.on('value', snapshot => {
      const { data } = snapshot.val();
      setData(data)
    });
  })

  return (<div>
    <div>Data: {data}</div>
  </div>)
}

export default RequestRealtimeBlock;