import React, { useState, useEffect } from 'react';

import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  setupIonicReact,
  IonPage
} from '@ionic/react';
import './App.css';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import './App.css'; // Importe o arquivo CSS personalizado

setupIonicReact();

const App: React.FC = () => {
  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error('Erro ao buscar dados da API', error);
    }
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Missão 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div id="content">
          <center>
            <h1>Bem-vindo ao Meu Site!</h1>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolore iure alias voluptatem qui sequi, amet veniam possimus eius
                doloremque illum facere deleniti, voluptatibus ex! Fugit sed debitis
                corporis quod.
              </p>
            </div>
            <div>
              <IonButton id="myButton" onClick={fetchData}>Clique aqui</IonButton>
            </div>

            {apiData && (
              <div>
                <h2>Resposta da API:</h2>
                <p>{JSON.stringify(apiData)}</p>
              </div>
            )}

            <hr />

            <h2>Seção Importante!</h2>
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                quos quaerat mollitia, nihil repellat nisi cupiditate molestias
                officiis deleniti itaque in tenetur eum corrupti quia odio optio
                incidunt aliquid praesentium!.
              </p>
            </div>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Imagem de exemplo</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <img
                  src="https://www.unijui.edu.br/images/stories/manual_identidade/marcas/download.php?arquivo=marca.png"
                  alt="Imagem de exemplo"
                />
              </IonCardContent>
            </IonCard>
          </center>
        </div>
      </IonContent>
    </IonApp>
  );
};

export default App;
