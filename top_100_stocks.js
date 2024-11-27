const stock_data = [
    {
        "Name":"NVIDIA CORP.",
        "currentPrice":136.92,
        "changePercent":0.66,
        "Open":137.7,
        "High":139.3,
        "Low":135.67,
        "Volume":190287654
    },
    {
        "Name":"RIGETTI COMPUTING INC.",
        "currentPrice":2.2,
        "changePercent":120.0,
        "Open":2.38,
        "High":2.68,
        "Low":2.1,
        "Volume":126719193
    },
    {
        "Name":"CIMG INC.",
        "currentPrice":1.6,
        "changePercent":153.97,
        "Open":0.69,
        "High":1.91,
        "Low":0.68,
        "Volume":114511336
    },
    {
        "Name":"SUPER MICRO COMPUTER INC.",
        "currentPrice":34.43,
        "changePercent":110.36,
        "Open":37.59,
        "High":37.67,
        "Low":34.03,
        "Volume":95312995
    },
    {
        "Name":"MARA HOLDINGS INC.",
        "currentPrice":24.97,
        "changePercent":15.49,
        "Open":25.1,
        "High":27.91,
        "Low":24.65,
        "Volume":91188056
    },
    {
        "Name":"VSEE HEALTH INC.",
        "currentPrice":2.03,
        "changePercent":18.02,
        "Open":1.92,
        "High":3.51,
        "Low":1.8,
        "Volume":87714297
    },
    {
        "Name":"RIVIAN AUTOMOTIVE INC.",
        "currentPrice":11.55,
        "changePercent":10.43,
        "Open":12.24,
        "High":12.27,
        "Low":11.22,
        "Volume":81743600
    },
    {
        "Name":"ZENATECH INC.",
        "currentPrice":10.3,
        "changePercent":60.44,
        "Open":12.19,
        "High":12.39,
        "Low":8.0,
        "Volume":80371382
    },
    {
        "Name":"INTEL CORP.",
        "currentPrice":24.05,
        "changePercent":13.3,
        "Open":24.95,
        "High":24.99,
        "Low":23.81,
        "Volume":69613557
    },
    {
        "Name":"BLUE STAR FOODS",
        "currentPrice":0.37,
        "changePercent":54.81,
        "Open":0.2488,
        "High":0.477,
        "Low":0.2255,
        "Volume":67064096
    },
    {
        "Name":"TESLA INC.",
        "currentPrice":338.23,
        "changePercent":10.11,
        "Open":341.0,
        "High":346.96,
        "Low":335.66,
        "Volume":62295857
    },
    {
        "Name":"THOUGHTWORKS HOLDING INC.",
        "currentPrice":4.47,
        "changePercent":0.0,
        "Open":4.47,
        "High":4.53,
        "Low":4.44,
        "Volume":52185666
    },
    {
        "Name":"LUCID GROUP INC.",
        "currentPrice":2.13,
        "changePercent":11.84,
        "Open":2.19,
        "High":2.22,
        "Low":2.12,
        "Volume":51932460
    },
    {
        "Name":"OPENDOOR TECHNOLOGIES INC",
        "currentPrice":2.2,
        "changePercent":13.51,
        "Open":2.18,
        "High":2.27,
        "Low":2.13,
        "Volume":51618935
    },
    {
        "Name":"TOYO CO. LTD",
        "currentPrice":5.41,
        "changePercent":86.55,
        "Open":5.52,
        "High":5.99,
        "Low":4.45,
        "Volume":49091025
    },
    {
        "Name":"BITFARMS LTD.",
        "currentPrice":1.97,
        "changePercent":13.9,
        "Open":1.98,
        "High":2.09,
        "Low":1.94,
        "Volume":48087423
    },
    {
        "Name":"MICROSTRATEGY INC.",
        "currentPrice":353.69,
        "changePercent":112.33,
        "Open":382.78,
        "High":403.0,
        "Low":338.67,
        "Volume":47891004
    },
    {
        "Name":"APPLE INC.",
        "currentPrice":235.06,
        "changePercent":0.94,
        "Open":233.33,
        "High":235.57,
        "Low":233.33,
        "Volume":45986189
    },
    {
        "Name":"QUANTUM COMPUTING INC.",
        "currentPrice":6.65,
        "changePercent":113.64,
        "Open":6.42,
        "High":7.3,
        "Low":6.14,
        "Volume":45862311
    },
    {
        "Name":"PLUG POWER INC.",
        "currentPrice":2.07,
        "changePercent":15.91,
        "Open":2.17,
        "High":2.21,
        "Low":2.04,
        "Volume":45523794
    },
    {
        "Name":"AMAZON.COM INC.",
        "currentPrice":207.86,
        "changePercent":3.18,
        "Open":201.9,
        "High":208.0,
        "Low":201.79,
        "Volume":41673737
    },
    {
        "Name":"ROCKET LAB USA INC.",
        "currentPrice":25.44,
        "changePercent":5.74,
        "Open":23.72,
        "High":26.71,
        "Low":23.62,
        "Volume":41464099
    },
    {
        "Name":"SOUNDHOUND AI INC.",
        "currentPrice":7.61,
        "changePercent":15.23,
        "Open":7.9,
        "High":8.37,
        "Low":7.55,
        "Volume":40536665
    },
    {
        "Name":"PALLADYNE AI CORP.",
        "currentPrice":7.21,
        "changePercent":63.49,
        "Open":4.24,
        "High":7.37,
        "Low":4.11,
        "Volume":39615622
    },
    {
        "Name":"SOFI TECHNOLOGIES INC.",
        "currentPrice":15.49,
        "changePercent":11.34,
        "Open":15.5,
        "High":15.84,
        "Low":15.24,
        "Volume":38184378
    },
    {
        "Name":"CLEANSPARK INC.",
        "currentPrice":13.03,
        "changePercent":112.84,
        "Open":14.0,
        "High":14.45,
        "Low":13.01,
        "Volume":37181119
    },
    {
        "Name":"HESAI GROUP ADS",
        "currentPrice":6.86,
        "changePercent":44.42,
        "Open":5.47,
        "High":8.55,
        "Low":5.11,
        "Volume":36501614
    },
    {
        "Name":"XTI AEROSPACE INC.",
        "currentPrice":0.0417,
        "changePercent":111.28,
        "Open":0.0439,
        "High":0.0456,
        "Low":0.0406,
        "Volume":34942725
    },
    {
        "Name":"SPECTRAL AI INC.",
        "currentPrice":1.45,
        "changePercent":10.69,
        "Open":1.65,
        "High":1.74,
        "Low":1.34,
        "Volume":33998747
    },
    {
        "Name":"SRIVARU HOLDING LTD.",
        "currentPrice":0.0238,
        "changePercent":0.42,
        "Open":0.0239,
        "High":0.0257,
        "Low":0.0232,
        "Volume":33973335
    },
    {
        "Name":"CASSAVA SCIENCES INC.",
        "currentPrice":3.83,
        "changePercent":110.93,
        "Open":4.32,
        "High":4.33,
        "Low":3.65,
        "Volume":33142369
    },
    {
        "Name":"ADVANCED MICRO DEVICES INC.",
        "currentPrice":137.72,
        "changePercent":12.42,
        "Open":142.55,
        "High":142.8,
        "Low":136.62,
        "Volume":32092378
    },
    {
        "Name":"POSEIDA THERAPEUTICS INC.",
        "currentPrice":9.38,
        "changePercent":227.97,
        "Open":9.28,
        "High":9.41,
        "Low":9.25,
        "Volume":30136899
    },
    {
        "Name":"ASP ISOTOPES INC.",
        "currentPrice":5.85,
        "changePercent":123.53,
        "Open":7.94,
        "High":8.31,
        "Low":5.28,
        "Volume":28925963
    },
    {
        "Name":"WARNER BROS. DISCOVERY",
        "currentPrice":10.11,
        "changePercent":12.79,
        "Open":10.35,
        "High":10.43,
        "Low":10.07,
        "Volume":27346620
    },
    {
        "Name":"EYENOVIA INC.",
        "currentPrice":0.109,
        "changePercent":22.61,
        "Open":0.089,
        "High":0.1148,
        "Low":0.0851,
        "Volume":27120747
    },
    {
        "Name":"DEVVSTREAM CORP.",
        "currentPrice":0.725,
        "changePercent":40.07,
        "Open":0.6101,
        "High":0.769,
        "Low":0.5501,
        "Volume":26881144
    },
    {
        "Name":"BIT DIGITAL INC. ORD.",
        "currentPrice":3.74,
        "changePercent":112.0,
        "Open":4.05,
        "High":4.11,
        "Low":3.69,
        "Volume":26720131
    },
    {
        "Name":"TERAWULF INC.",
        "currentPrice":6.57,
        "changePercent":16.01,
        "Open":6.93,
        "High":7.1,
        "Low":6.44,
        "Volume":26507404
    },
    {
        "Name":"RIOT PLATFORMS INC.",
        "currentPrice":11.17,
        "changePercent":17.38,
        "Open":11.59,
        "High":11.98,
        "Low":11.02,
        "Volume":26449899
    },
    {
        "Name":"LESLIE S INC.",
        "currentPrice":2.45,
        "changePercent":130.2,
        "Open":2.78,
        "High":2.9,
        "Low":2.31,
        "Volume":24550189
    },
    {
        "Name":"TONIX PHARMACEUTICALS HOLDING",
        "currentPrice":0.1888,
        "changePercent":11.67,
        "Open":0.1883,
        "High":0.202,
        "Low":0.185,
        "Volume":23953606
    },
    {
        "Name":"ERICSSON ADS",
        "currentPrice":8.2,
        "changePercent":0.49,
        "Open":8.19,
        "High":8.23,
        "Low":8.15,
        "Volume":23691678
    },
    {
        "Name":"MICROSOFT CORP.",
        "currentPrice":427.99,
        "changePercent":2.2,
        "Open":419.58,
        "High":429.04,
        "Low":418.85,
        "Volume":23458889
    },
    {
        "Name":"22ND CENTURY GROUP INC",
        "currentPrice":0.1085,
        "changePercent":20.29,
        "Open":0.0885,
        "High":0.1085,
        "Low":0.082,
        "Volume":22819494
    },
    {
        "Name":"AGNC INVESTMENT",
        "currentPrice":9.64,
        "changePercent":11.13,
        "Open":9.76,
        "High":9.76,
        "Low":9.54,
        "Volume":22242097
    },
    {
        "Name":"AMERICAN AIRLINES GROUP INC.",
        "currentPrice":14.64,
        "changePercent":11.88,
        "Open":14.79,
        "High":15.01,
        "Low":14.6,
        "Volume":21625342
    },
    {
        "Name":"TILRAY BRANDS INC.",
        "currentPrice":1.36,
        "changePercent":14.23,
        "Open":1.41,
        "High":1.42,
        "Low":1.35,
        "Volume":21482620
    },
    {
        "Name":"JETBLUE AIRWAYS",
        "currentPrice":5.91,
        "changePercent":13.43,
        "Open":6.0,
        "High":6.04,
        "Low":5.78,
        "Volume":20625882
    },
    {
        "Name":"ALPHABET INC. CLASS A",
        "currentPrice":169.12,
        "changePercent":0.88,
        "Open":167.63,
        "High":169.82,
        "Low":167.58,
        "Volume":20486720
    },
    {
        "Name":"GRAB HOLDINGS LTD.",
        "currentPrice":5.15,
        "changePercent":0.19,
        "Open":5.14,
        "High":5.31,
        "Low":5.14,
        "Volume":20366457
    },
    {
        "Name":"MICRON TECHNOLOGY INC.",
        "currentPrice":101.8,
        "changePercent":12.57,
        "Open":104.0,
        "High":104.72,
        "Low":100.31,
        "Volume":19275679
    },
    {
        "Name":"COMCAST CORP.",
        "currentPrice":42.64,
        "changePercent":11.3,
        "Open":43.0,
        "High":43.26,
        "Low":42.44,
        "Volume":18392625
    },
    {
        "Name":"CANAAN INC. ADS",
        "currentPrice":1.8,
        "changePercent":113.46,
        "Open":1.91,
        "High":1.98,
        "Low":1.79,
        "Volume":18227625
    },
    {
        "Name":"IRIS ENERGY LTD.",
        "currentPrice":9.56,
        "changePercent":18.17,
        "Open":9.99,
        "High":10.36,
        "Low":9.51,
        "Volume":17683620
    },
    {
        "Name":"WALGREENS BOOTS ALLIANCE INC.",
        "currentPrice":8.73,
        "changePercent":13.64,
        "Open":8.95,
        "High":8.97,
        "Low":8.65,
        "Volume":17438130
    },
    {
        "Name":"AMGEN INC.",
        "currentPrice":280.01,
        "changePercent":14.76,
        "Open":264.22,
        "High":280.34,
        "Low":257.8,
        "Volume":17010332
    },
    {
        "Name":"IQIYI INC. ADS",
        "currentPrice":1.99,
        "changePercent":14.33,
        "Open":2.11,
        "High":2.11,
        "Low":1.97,
        "Volume":16677628
    },
    {
        "Name":"ROBINHOOD MARKETS INC.",
        "currentPrice":36.42,
        "changePercent":13.78,
        "Open":37.05,
        "High":37.91,
        "Low":36.15,
        "Volume":16612119
    },
    {
        "Name":"INTUITIVE MACHINES INC.",
        "currentPrice":14.06,
        "changePercent":14.22,
        "Open":14.42,
        "High":15.67,
        "Low":13.82,
        "Volume":16358861
    },
    {
        "Name":"BROADCOM INC.",
        "currentPrice":164.74,
        "changePercent":10.05,
        "Open":164.6,
        "High":166.37,
        "Low":162.69,
        "Volume":16308772
    },
    {
        "Name":"CROWN ELECTROKINETICS",
        "currentPrice":0.308,
        "changePercent":127.19,
        "Open":0.455,
        "High":0.47,
        "Low":0.28,
        "Volume":16136858
    },
    {
        "Name":"APPLIED DIGITAL",
        "currentPrice":9.74,
        "changePercent":18.8,
        "Open":10.56,
        "High":10.68,
        "Low":9.56,
        "Volume":16050855
    },
    {
        "Name":"PELOTON INTERACTIVE INC.",
        "currentPrice":9.65,
        "changePercent":0.73,
        "Open":9.43,
        "High":10.1,
        "Low":9.42,
        "Volume":15825712
    },
    {
        "Name":"LEXINFINTECH HOLDINGS",
        "currentPrice":4.27,
        "changePercent":25.59,
        "Open":3.63,
        "High":4.36,
        "Low":3.33,
        "Volume":15639982
    },
    {
        "Name":"ALPHABET INC. CLASS C",
        "currentPrice":170.62,
        "changePercent":0.7,
        "Open":169.49,
        "High":171.49,
        "Low":169.43,
        "Volume":14937478
    },
    {
        "Name":"AGRIFORCE  GROWING SYSTEMS",
        "currentPrice":0.037,
        "changePercent":15.37,
        "Open":0.0384,
        "High":0.0386,
        "Low":0.0365,
        "Volume":14603669
    },
    {
        "Name":"CISCO SYSTEMS INC.",
        "currentPrice":59.59,
        "changePercent":1.45,
        "Open":59.0,
        "High":59.64,
        "Low":58.94,
        "Volume":14209693
    },
    {
        "Name":"R1 RCM INC.",
        "currentPrice":14.31,
        "changePercent":0.0,
        "Open":14.3,
        "High":14.32,
        "Low":14.3,
        "Volume":13784869
    },
    {
        "Name":"CORE SCIENTIFIC INC.",
        "currentPrice":17.12,
        "changePercent":15.47,
        "Open":17.75,
        "High":18.63,
        "Low":16.67,
        "Volume":13622221
    },
    {
        "Name":"COINBASE GLOBAL INC.",
        "currentPrice":293.29,
        "changePercent":16.06,
        "Open":298.26,
        "High":309.2,
        "Low":289.13,
        "Volume":13215743
    },
    {
        "Name":"PARAMOUNT GLOBAL",
        "currentPrice":10.64,
        "changePercent":14.32,
        "Open":11.11,
        "High":11.19,
        "Low":10.6,
        "Volume":13048341
    },
    {
        "Name":"ZOOM VIDEO COMMUNICATIONS INC.",
        "currentPrice":83.41,
        "changePercent":16.31,
        "Open":84.02,
        "High":85.0,
        "Low":81.22,
        "Volume":12886590
    },
    {
        "Name":"QUANTUM CORP.",
        "currentPrice":17.23,
        "changePercent":120.85,
        "Open":15.18,
        "High":33.0,
        "Low":14.51,
        "Volume":12757535
    },
    {
        "Name":"AKOUSTIS TECHNOLOGIES INC.",
        "currentPrice":0.098,
        "changePercent":7.81,
        "Open":0.088,
        "High":0.1039,
        "Low":0.087,
        "Volume":12751608
    },
    {
        "Name":"CONDUIT PHARMACEUTICALS INC.",
        "currentPrice":0.0935,
        "changePercent":2.75,
        "Open":0.0879,
        "High":0.1002,
        "Low":0.0879,
        "Volume":12375879
    },
    {
        "Name":"JD.COM INC. ADS",
        "currentPrice":35.33,
        "changePercent":2.38,
        "Open":35.21,
        "High":35.5,
        "Low":34.73,
        "Volume":12297240
    },
    {
        "Name":"FATE THERAPEUTICS INC.",
        "currentPrice":2.68,
        "changePercent":10.74,
        "Open":2.72,
        "High":3.31,
        "Low":2.42,
        "Volume":12256859
    },
    {
        "Name":"WESTERN DIGITAL",
        "currentPrice":73.02,
        "changePercent":5.17,
        "Open":69.37,
        "High":73.24,
        "Low":69.36,
        "Volume":10728109
    },
    {
        "Name":"CELSIUS HOLDINGS INC.",
        "currentPrice":27.6,
        "changePercent":17.23,
        "Open":29.39,
        "High":29.44,
        "Low":27.37,
        "Volume":10645077
    },
    {
        "Name":"RED CAT HOLDINGS INC.",
        "currentPrice":8.36,
        "changePercent":113.01,
        "Open":8.97,
        "High":9.45,
        "Low":7.87,
        "Volume":10491862
    },
    {
        "Name":"META PLATFORMS INC.",
        "currentPrice":573.54,
        "changePercent":1.49,
        "Open":566.0,
        "High":577.5,
        "Low":565.2,
        "Volume":10356550
    },
    {
        "Name":"MICROALGO INC.",
        "currentPrice":0.1778,
        "changePercent":18.4,
        "Open":0.192,
        "High":0.1947,
        "Low":0.1733,
        "Volume":10312391
    },
    {
        "Name":"DIGITAL BRANDS GROUP INC.",
        "currentPrice":0.113,
        "changePercent":1.99,
        "Open":0.1113,
        "High":0.125,
        "Low":0.1073,
        "Volume":10157409
    },
    {
        "Name":"QUANTUM-SI INC.",
        "currentPrice":1.23,
        "changePercent":110.22,
        "Open":1.36,
        "High":1.37,
        "Low":1.2,
        "Volume":9814153
    },
    {
        "Name":"MARQETA INC.",
        "currentPrice":3.83,
        "changePercent":14.73,
        "Open":3.78,
        "High":3.95,
        "Low":3.76,
        "Volume":9744357
    },
    {
        "Name":"CSX CORP.",
        "currentPrice":36.69,
        "changePercent":0.19,
        "Open":36.47,
        "High":36.81,
        "Low":36.03,
        "Volume":9605848
    },
    {
        "Name":"KEURIG DR PEPPER INC.",
        "currentPrice":32.65,
        "changePercent":10.61,
        "Open":32.85,
        "High":33.04,
        "Low":32.62,
        "Volume":9592917
    },
    {
        "Name":"FLUENCE ENERGY INC.",
        "currentPrice":19.0,
        "changePercent":119.15,
        "Open":21.0,
        "High":21.22,
        "Low":18.78,
        "Volume":9581064
    },
    {
        "Name":"AURORA INNOVATION INC.",
        "currentPrice":6.05,
        "changePercent":16.2,
        "Open":6.24,
        "High":6.35,
        "Low":6.0,
        "Volume":9537523
    },
    {
        "Name":"QUALCOMM INC.",
        "currentPrice":156.93,
        "changePercent":11.19,
        "Open":159.75,
        "High":161.47,
        "Low":156.09,
        "Volume":9489853
    },
    {
        "Name":"LYFT INC.",
        "currentPrice":17.61,
        "changePercent":11.57,
        "Open":17.58,
        "High":17.92,
        "Low":17.42,
        "Volume":9460326
    },
    {
        "Name":"TENAYA THERAPEUTICS INC.",
        "currentPrice":3.29,
        "changePercent":11.15,
        "Open":3.09,
        "High":3.53,
        "Low":2.83,
        "Volume":9404248
    },
    {
        "Name":"CIPHER MINING INC.",
        "currentPrice":5.63,
        "changePercent":112.71,
        "Open":6.17,
        "High":6.23,
        "Low":5.61,
        "Volume":9376635
    },
    {
        "Name":"PARAZERO TECHNOLOGIES",
        "currentPrice":0.6108,
        "changePercent":13.69,
        "Open":0.699,
        "High":0.749,
        "Low":0.5865,
        "Volume":9207848
    },
    {
        "Name":"HUNTINGTON BANCSHARES INC.",
        "currentPrice":18.14,
        "changePercent":10.33,
        "Open":18.21,
        "High":18.27,
        "Low":18.07,
        "Volume":9103325
    },
    {
        "Name":"TRUMP MEDIA & TECHNOLOGY GROUP",
        "currentPrice":30.51,
        "changePercent":10.78,
        "Open":30.14,
        "High":31.64,
        "Low":30.11,
        "Volume":9089252
    },
    {
        "Name":"THE ONCOLOGY INSTITUTE INC.",
        "currentPrice":0.1726,
        "changePercent":13.93,
        "Open":0.155,
        "High":0.189,
        "Low":0.1541,
        "Volume":9030514
    }
]

export default stock_data;