import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';

import { firebaseConfig } from '../../../config';

firebase.initializeApp(firebaseConfig);

const RequestRealtimeBlock = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const ref = firebase.database().ref('/');
    ref.on('value', snapshot => {
      const { data: firebaseData } = snapshot.val();
      setData(firebaseData);
    });
  });

  return (
    <div>
      <div>Data real time: {data}</div>
    </div>
  );
};

export default RequestRealtimeBlock;
