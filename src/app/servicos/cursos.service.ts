import { Injectable, Input } from '@angular/core';
import { Curso } from '../interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  public listaDeCursos: Array<Curso> = [
    {
      id: 0,
      autor: "Hashtag Programação",
      linkFotoCanal: "https://yt3.googleusercontent.com/-kPp7Q9HemvXXn4yK8wbH9KFAvNeUTD6cCh1kmJRFE7GLtpdzIDhegtEfhcpa10xUyeKZUATvg=s176-c-k-c0x00ffffff-no-rj",
      linkCanal: "https://www.youtube.com/@HashtagProgramacao",
      titulo: "Curso de Python",
      quantidadeVideos: 6,
      preco: "15,86",
      linkBanner: "https://img.freepik.com/fotos-premium/codificacao-de-homem-negro-e-rede-global-com-laptop-de-icones-e-aplicativo-com-transformacao-digital-e-sobreposicao-cibernetica-de-ti-com-programacao-e-atualizacao-de-software-com-holograma-3d-da-terra-e-computacao-em-nuvem_590464-150990.jpg?w=360",
      tabelaVideos: [
        {
          id: 1,
          titulo: "Aplicações de Python, Instalação e Lógica de Programação - Curso de Python - Aula 1",
          linkVideo: "https://www.youtube.com/embed/BW9Va5syNC0?si=icp3EhfuTmqpYXDU",
          concluido: false
        },
        {
          id: 2,
          titulo: "Importar bibliotecas e Exibir Informações - Curso de Python - Aula 2",
          linkVideo: "https://www.youtube.com/embed/AqSdAveazjw?si=yUAIzKXmCTngM9cB",
          concluido: false
        },
        {
          id: 3,
          titulo: "Estruturas de Repetição e o Format - Curso de Python - Aula 3",
          linkVideo: "https://www.youtube.com/embed/ft8OJam4VOw?si=QPdBX8JdKwrA15Fc",
          concluido: false
        },
        {
          id: 4,
          titulo: "Estruturas de Condição e Textos em Python - Curso de Python - Aula 4",
          linkVideo: "https://www.youtube.com/embed/IgM1e_GO3bo?si=QR8ihCSl9UraqriY",
          concluido: false
        },
        {
          id: 5,
          titulo: "Tabelas e Bases de Dados em Python - Curso de Python - Aula 5",
          linkVideo: "https://www.youtube.com/embed/V7-ARKdE1QE?si=CHjNScTftCuA1kIs",
          concluido: false
        },
        {
          id: 6,
          titulo: "Indicadores e Gráficos em Python - Curso de Python - Aula 6",
          linkVideo: "https://www.youtube.com/embed/xLbKg2ggqNQ?si=6WYiTWCrscNVgBvs",
          concluido: false
        },
      ]
    },
    {
      id: 1,
      autor: "CódigoParaTodos",
      linkFotoCanal: "https://yt3.ggpht.com/ytc/AIf8zZT8TEQ0lOvZC2z2HHltaia1TnBmKuxJu6m7E58d=s48-c-k-c0x00ffffff-no-rj",
      linkCanal: "https://www.youtube.com/@CodigoParaTodos",
      titulo: "C# - Curso Rápido - Programação Orientada Objetos",
      quantidadeVideos: 6,
      preco: "23,47",
      linkBanner: "https://img.freepik.com/vetores-gratis/fluxo-de-vetor-de-design-de-codigo-binario_53876-166150.jpg?w=360&t=st=1706812177~exp=1706812777~hmac=b83991b90b8f2cbad48386e20f48fa969f0e2d30aee1737e75afe972e62f302a",
      tabelaVideos: [
        {
          id: 1,
          titulo: "C# Programação Orientada Objetos - Curso Rápido - Classes Objetos Construtores Atributos Métodos",
          linkVideo: "https://www.youtube.com/embed/GZu2Hv47iCo?si=YKTIEVbQGhnWiBc3",
          concluido: false
        },
        {
          id: 2,
          titulo: "C# Programação Orientado a Objetos - Curso Rápido - Herança e Polimorfismo",
          linkVideo: "https://www.youtube.com/embed/ikhuQ5DXtC4?si=-ughOAILsF6mElNM",
          concluido: false
        },
        {
          id: 3,
          titulo: "C# Programação Orientado a Objetos - Curso Rápido - Atributos Estáticos e Sobrecarga Operadores",
          linkVideo: "https://www.youtube.com/embed/Ot-2w2WkLzA?si=ulP5kSFGPruggWru",
          concluido: false
        },
        {
          id: 4,
          titulo: "C# Programação Orientado a Objetos - Curso Rápido - Classes Abstratas",
          linkVideo: "https://www.youtube.com/embed/z10DDga8JM8?si=9_C7svocx2wOANSw",
          concluido: false
        },
        {
          id: 5,
          titulo: "C# Programação Orientada a Objetos - Curso Rápido - Interfaces",
          linkVideo: "https://www.youtube.com/embed/OWSTXm9NApY?si=TQBHehsmMA5HRN-E",
          concluido: false
        },
        {
          id: 6,
          titulo: "Passagem Parâmetros em C# - value, ref, out e params",
          linkVideo: "https://www.youtube.com/embed/yi0vgS_GKgA?si=MIrB1NInvdeX8Y5R",
          concluido: false
        }
      ]
    }
  ]

  public getLista() {
    return this.listaDeCursos
  }
}
