// Primeiro, instale as dependências necessárias:
// npm install react-native-webrtc

import React, { useEffect, useState } from "react";
import { View, Button, Text } from "react-native";
// import {
//   RTCPeerConnection,
//   RTCIceCandidate,
//   RTCSessionDescription,
//   mediaDevices,
// } from "react-native-webrtc";

const WebRTCExample = () => {
  // const [localStream, setLocalStream] = useState(null);
  // const [remoteStream, setRemoteStream] = useState(null);
  // const [peerConnection, setPeerConnection] = useState(null);

  // // Configuração do servidor ICE (STUN/TURN)
  // const configuration = {
  //   iceServers: [
  //     {
  //       urls: [
  //         "stun:stun1.l.google.com:19302",
  //         "stun:stun2.l.google.com:19302",
  //       ],
  //     },
  //   ],
  // };

  // // Inicializar stream local
  // const startLocalStream = async () => {
  //   try {
  //     const stream = await mediaDevices.getUserMedia({
  //       audio: true,
  //       video: true,
  //     });
  //     setLocalStream(stream);
  //   } catch (error) {
  //     console.error("Erro ao acessar mídia local:", error);
  //   }
  // };

  // // Inicializar conexão peer
  // const startPeerConnection = async () => {
  //   const pc = new RTCPeerConnection(configuration);

  //   // Adicionar stream local
  //   if (localStream) {
  //     localStream.getTracks().forEach((track) => {
  //       pc.addTrack(track, localStream);
  //     });
  //   }

  //   // Lidar com stream remoto
  //   pc.ontrack = (event) => {
  //     setRemoteStream(event.streams[0]);
  //   };

  //   // Lidar com candidatos ICE
  //   pc.onicecandidate = (event) => {
  //     if (event.candidate) {
  //       // Envie o candidato ICE para o peer remoto através do seu servidor de sinalização
  //       sendIceCandidateToSignalingServer(event.candidate);
  //     }
  //   };

  //   setPeerConnection(pc);
  // };

  // // Criar oferta
  // const createOffer = async () => {
  //   try {
  //     const offer = await peerConnection.createOffer();
  //     await peerConnection.setLocalDescription(offer);

  //     // Envie a oferta para o peer remoto através do seu servidor de sinalização
  //     sendOfferToSignalingServer(offer);
  //   } catch (error) {
  //     console.error("Erro ao criar oferta:", error);
  //   }
  // };

  // // Receber e responder à oferta
  // const handleReceivedOffer = async (offer) => {
  //   try {
  //     await peerConnection.setRemoteDescription(
  //       new RTCSessionDescription(offer)
  //     );

  //     const answer = await peerConnection.createAnswer();
  //     await peerConnection.setLocalDescription(answer);

  //     // Envie a resposta para o peer remoto através do seu servidor de sinalização
  //     sendAnswerToSignalingServer(answer);
  //   } catch (error) {
  //     console.error("Erro ao lidar com oferta:", error);
  //   }
  // };

  // // Funções de exemplo para comunicação com servidor de sinalização
  // const sendOfferToSignalingServer = (offer) => {
  //   // Implemente a lógica para enviar a oferta ao seu servidor
  //   console.log("Enviando oferta:", offer);
  // };

  // const sendAnswerToSignalingServer = (answer) => {
  //   // Implemente a lógica para enviar a resposta ao seu servidor
  //   console.log("Enviando resposta:", answer);
  // };

  // const sendIceCandidateToSignalingServer = (candidate) => {
  //   // Implemente a lógica para enviar candidatos ICE ao seu servidor
  //   console.log("Enviando candidato ICE:", candidate);
  // };

  return (
    <View>
      {/* <Button title="Iniciar Stream Local" onPress={startLocalStream} />
      <Button
        title="Iniciar Conexão Peer"
        onPress={startPeerConnection}
        disabled={!localStream}
      />
      <Button
        title="Criar Oferta"
        onPress={createOffer}
        disabled={!peerConnection}
      />

      {localStream && (
        <Text>Stream Local Ativo</Text>
        // Aqui você pode adicionar um componente RTCView para mostrar o vídeo local
      )}

      {remoteStream && (
        <Text>Stream Remoto Ativo</Text>
        // Aqui você pode adicionar um componente RTCView para mostrar o vídeo remoto
      )} */}
    </View>
  );
};

export default WebRTCExample;
