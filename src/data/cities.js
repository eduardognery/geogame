const cities = [
  {
    "id": 1,
    "name": "Porto Alegre",
    "stateId": 1,
    "latitude": -30.0277,
    "longitude": -51.2286,
    "level": 1
  },
  {
    "id": 2,
    "name": "Florianópolis",
    "stateId": 2,
    "latitude": -27.5935,
    "longitude": -48.5585,
    "level": 1
  },
  {
    "id": 3,
    "name": "Curitiba",
    "stateId": 3,
    "latitude": -25.4284,
    "longitude": -49.2733,
    "level": 1
  },
  {
    "id": 4,
    "name": "Caxias do Sul",
    "stateId": 1,
    "latitude": -29.1667,
    "longitude": -51.1833,
    "level": 2
  },
  {
    "id": 5,
    "name": "Canoas",
    "stateId": 1,
    "latitude": -29.92,
    "longitude": -51.18,
    "level": 2
  },
  {
    "id": 6,
    "name": "Pelotas",
    "stateId": 1,
    "latitude": -31.7466,
    "longitude": -52.3354,
    "level": 2
  },
  {
    "id": 7,
    "name": "Santa Maria",
    "stateId": 1,
    "latitude": -29.6833,
    "longitude": -53.8,
    "level": 2
  },
  {
    "id": 8,
    "name": "Joinville",
    "stateId": 2,
    "latitude": -26.3204,
    "longitude": -48.8437,
    "level": 2
  },
  {
    "id": 9,
    "name": "Chapecó",
    "stateId": 2,
    "latitude": -27.0952,
    "longitude": -52.6182,
    "level": 2
  },
  {
    "id": 10,
    "name": "Criciúma",
    "stateId": 2,
    "latitude": -28.6783,
    "longitude": -49.3704,
    "level": 2
  },
  {
    "id": 11,
    "name": "Jaraguá do Sul",
    "stateId": 2,
    "latitude": -26.485,
    "longitude": -49.0668,
    "level": 2
  },
  {
    "id": 12,
    "name": "Londrina",
    "stateId": 3,
    "latitude": -23.31,
    "longitude": -51.1628,
    "level": 2
  },
  {
    "id": 13,
    "name": "Maringá",
    "stateId": 3,
    "latitude": -23.4273,
    "longitude": -51.937,
    "level": 2
  },
  {
    "id": 14,
    "name": "Ponta Grossa",
    "stateId": 3,
    "latitude": -25.0994,
    "longitude": -50.1583,
    "level": 2
  },
  {
    "id": 15,
    "name": "Foz do Iguaçu",
    "stateId": 3,
    "latitude": -25.5469,
    "longitude": -54.5882,
    "level": 2
  },
  {
    "id": 16,
    "name": "Viamão",
    "stateId": 1,
    "latitude": -30.0812,
    "longitude": -51.024,
    "level": 3
  },
  {
    "id": 17,
    "name": "São Leopoldo",
    "stateId": 1,
    "latitude": -29.76,
    "longitude": -51.1469,
    "level": 3
  },
  {
    "id": 18,
    "name": "Santa Cruz do Sul",
    "stateId": 1,
    "latitude": -29.7178,
    "longitude": -52.4258,
    "level": 3
  },
  {
    "id": 19,
    "name": "Gravataí",
    "stateId": 1,
    "latitude": -29.9438,
    "longitude": -50.9936,
    "level": 3
  },
  {
    "id": 20,
    "name": "Rio Grande",
    "stateId": 1,
    "latitude": -32.035,
    "longitude": -52.0986,
    "level": 3
  },
  {
    "id": 21,
    "name": "Passo Fundo",
    "stateId": 1,
    "latitude": -28.2624,
    "longitude": -52.409,
    "level": 3
  },
  {
    "id": 22,
    "name": "Uruguaiana",
    "stateId": 1,
    "latitude": -29.7585,
    "longitude": -57.096,
    "level": 3
  },
  {
    "id": 23,
    "name": "Bento Gonçalves",
    "stateId": 1,
    "latitude": -29.1708,
    "longitude": -51.5189,
    "level": 3
  },
  {
    "id": 24,
    "name": "Bagé",
    "stateId": 1,
    "latitude": -31.32,
    "longitude": -54.1069,
    "level": 3
  },
  {
    "id": 25,
    "name": "Erechim",
    "stateId": 1,
    "latitude": -27.6339,
    "longitude": -52.2739,
    "level": 3
  },
  {
    "id": 26,
    "name": "Blumenau",
    "stateId": 2,
    "latitude": -26.9189,
    "longitude": -49.0661,
    "level": 3
  },
  {
    "id": 27,
    "name": "São José",
    "stateId": 2,
    "latitude": -27.6158,
    "longitude": -48.628,
    "level": 3
  },
  {
    "id": 28,
    "name": "Itajaí",
    "stateId": 2,
    "latitude": -26.9,
    "longitude": -48.6667,
    "level": 3
  },
  {
    "id": 29,
    "name": "Lages",
    "stateId": 2,
    "latitude": -27.8165,
    "longitude": -50.3268,
    "level": 3
  },
  {
    "id": 30,
    "name": "Balneário Camboriú",
    "stateId": 2,
    "latitude": -26.9953,
    "longitude": -48.6356,
    "level": 3
  },
  {
    "id": 31,
    "name": "Brusque",
    "stateId": 2,
    "latitude": -27.0949,
    "longitude": -48.9148,
    "level": 3
  },
  {
    "id": 32,
    "name": "Tubarão",
    "stateId": 2,
    "latitude": -28.4765,
    "longitude": -49.017,
    "level": 3
  },
  {
    "id": 33,
    "name": "Rio do Sul",
    "stateId": 2,
    "latitude": -27.2145,
    "longitude": -49.6435,
    "level": 3
  },
  {
    "id": 34,
    "name": "Indaial",
    "stateId": 2,
    "latitude": -26.8974,
    "longitude": -49.2317,
    "level": 3
  },
  {
    "id": 35,
    "name": "Timbó",
    "stateId": 2,
    "latitude": -26.8228,
    "longitude": -49.2719,
    "level": 3
  },
  {
    "id": 36,
    "name": "Cascavel",
    "stateId": 3,
    "latitude": -24.9585,
    "longitude": -53.4579,
    "level": 3
  },
  {
    "id": 37,
    "name": "São José dos Pinhais",
    "stateId": 3,
    "latitude": -25.5327,
    "longitude": -49.0889,
    "level": 3
  },
  {
    "id": 38,
    "name": "Colombo",
    "stateId": 3,
    "latitude": -25.2929,
    "longitude": -49.2235,
    "level": 3
  },
  {
    "id": 39,
    "name": "Guarapuava",
    "stateId": 3,
    "latitude": -25.3833,
    "longitude": -51.45,
    "level": 3
  },
  {
    "id": 40,
    "name": "Paranaguá",
    "stateId": 3,
    "latitude": -25.5208,
    "longitude": -48.5094,
    "level": 3
  },
  {
    "id": 41,
    "name": "Araucária",
    "stateId": 3,
    "latitude": -25.5928,
    "longitude": -49.41,
    "level": 3
  },
  {
    "id": 42,
    "name": "Toledo",
    "stateId": 3,
    "latitude": -24.7139,
    "longitude": -53.7428,
    "level": 3
  },
  {
    "id": 43,
    "name": "Apucarana",
    "stateId": 3,
    "latitude": -23.5508,
    "longitude": -51.4608,
    "level": 3
  },
  {
    "id": 44,
    "name": "Campo Largo",
    "stateId": 3,
    "latitude": -25.4598,
    "longitude": -49.5301,
    "level": 3
  },
  {
    "id": 45,
    "name": "Pinhais",
    "stateId": 3,
    "latitude": -25.4359,
    "longitude": -49.1718,
    "level": 3
  },
  {
    "id": 46,
    "name": "Vacaria",
    "stateId": 1,
    "latitude": -28.5022,
    "longitude": -50.9374,
    "level": 4
  },
  {
    "id": 47,
    "name": "Charqueadas",
    "stateId": 1,
    "latitude": -29.9667,
    "longitude": -51.6333,
    "level": 4
  },
  {
    "id": 48,
    "name": "Novo Hamburgo",
    "stateId": 1,
    "latitude": -29.6869,
    "longitude": -51.1275,
    "level": 4
  },
  {
    "id": 49,
    "name": "Alvorada",
    "stateId": 1,
    "latitude": -29.9989,
    "longitude": -51.0762,
    "level": 4
  },
  {
    "id": 50,
    "name": "Cachoeirinha",
    "stateId": 1,
    "latitude": -29.9477,
    "longitude": -51.0924,
    "level": 4
  },
  {
    "id": 51,
    "name": "Guaíba",
    "stateId": 1,
    "latitude": -30.1183,
    "longitude": -51.3214,
    "level": 4
  },
  {
    "id": 52,
    "name": "Lajeado",
    "stateId": 1,
    "latitude": -29.4682,
    "longitude": -51.9644,
    "level": 4
  },
  {
    "id": 53,
    "name": "Sant'Ana do Livramento",
    "stateId": 1,
    "latitude": -30.8898,
    "longitude": -55.5321,
    "level": 4
  },
  {
    "id": 54,
    "name": "Montenegro",
    "stateId": 1,
    "latitude": -29.6892,
    "longitude": -51.4671,
    "level": 4
  },
  {
    "id": 55,
    "name": "Panambi",
    "stateId": 1,
    "latitude": -28.2912,
    "longitude": -53.4914,
    "level": 4
  },
  {
    "id": 56,
    "name": "Palhoça",
    "stateId": 2,
    "latitude": -27.6444,
    "longitude": -48.6678,
    "level": 4
  },
  {
    "id": 57,
    "name": "São Bento do Sul",
    "stateId": 2,
    "latitude": -26.25,
    "longitude": -49.3833,
    "level": 4
  },
  {
    "id": 58,
    "name": "Navegantes",
    "stateId": 2,
    "latitude": -26.8995,
    "longitude": -48.6553,
    "level": 4
  },
  {
    "id": 59,
    "name": "Caçador",
    "stateId": 2,
    "latitude": -26.725,
    "longitude": -51.015,
    "level": 4
  },
  {
    "id": 60,
    "name": "Concórdia",
    "stateId": 2,
    "latitude": -27.2339,
    "longitude": -52.0278,
    "level": 4
  },
  {
    "id": 61,
    "name": "Araranguá",
    "stateId": 2,
    "latitude": -28.9406,
    "longitude": -49.4779,
    "level": 4
  },
  {
    "id": 62,
    "name": "Itapema",
    "stateId": 2,
    "latitude": -27.0911,
    "longitude": -48.612,
    "level": 4
  },
  {
    "id": 63,
    "name": "Laguna",
    "stateId": 2,
    "latitude": -28.4826,
    "longitude": -48.7815,
    "level": 4
  },
  {
    "id": 64,
    "name": "Sombrio",
    "stateId": 2,
    "latitude": -29.1039,
    "longitude": -49.6289,
    "level": 4
  },
  {
    "id": 65,
    "name": "Xaxim",
    "stateId": 2,
    "latitude": -26.9617,
    "longitude": -52.5347,
    "level": 4
  },
  {
    "id": 66,
    "name": "Arapongas",
    "stateId": 3,
    "latitude": -23.4189,
    "longitude": -51.4239,
    "level": 4
  },
  {
    "id": 67,
    "name": "Almirante Tamandaré",
    "stateId": 3,
    "latitude": -25.3274,
    "longitude": -49.2747,
    "level": 4
  },
  {
    "id": 68,
    "name": "Piraquara",
    "stateId": 3,
    "latitude": -25.4505,
    "longitude": -49.0691,
    "level": 4
  },
  {
    "id": 69,
    "name": "Umuarama",
    "stateId": 3,
    "latitude": -23.7658,
    "longitude": -53.325,
    "level": 4
  },
  {
    "id": 70,
    "name": "Fazenda Rio Grande",
    "stateId": 3,
    "latitude": -25.6578,
    "longitude": -49.3078,
    "level": 4
  },
  {
    "id": 71,
    "name": "Sarandi",
    "stateId": 3,
    "latitude": -23.4523,
    "longitude": -51.8528,
    "level": 4
  },
  {
    "id": 72,
    "name": "Campo Mourão",
    "stateId": 3,
    "latitude": -24.0458,
    "longitude": -52.3828,
    "level": 4
  },
  {
    "id": 73,
    "name": "Francisco Beltrão",
    "stateId": 3,
    "latitude": -26.0833,
    "longitude": -53.05,
    "level": 4
  },
  {
    "id": 74,
    "name": "Pato Branco",
    "stateId": 3,
    "latitude": -26.2167,
    "longitude": -52.6667,
    "level": 4
  },
  {
    "id": 75,
    "name": "Cianorte",
    "stateId": 3,
    "latitude": -23.6633,
    "longitude": -52.6044,
    "level": 4
  }
];

export default cities;