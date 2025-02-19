/*
format: 

      {
        title: '',
        authors: '',
        year: '',
        venue: '',
        img: '',
        type: 'conference/journal/archive',
        pdf: '',
        link: ''
      },

*/
const allpubs = [
  {
    year: '2024',
    papers: [
      {
        title: 'What Is the Best Way to Fine-Tune Self-supervised Medical Imaging Models?',
        authors: 'Muhammad Osama Khan, Yi Fang',
        year: '2024',
        venue: 'Annual Conference on Medical Image Understanding and Analysis',
        img: ' ',
        type: 'conference',
        pdf: 'https://link.springer.com/content/pdf/10.1007/978-3-031-66955-2.pdf',
        link: 'https://link.springer.com/chapter/10.1007/978-3-031-66955-2_19'
      },
      {
        title: 'FairDomain: Achieving Fairness in Cross-Domain Medical Image Segmentation and Classification',
        authors: 'Yu Tian, Congcong Wen, Min Shi, Muhammad Muneeb Afzal, Hao Huang, Muhammad Osama Khan, Yan Luo, Yi Fang, Mengyu Wang',
        year: '2024',
        venue: 'arXiv preprint arXiv:2407.08813',
        img: ' ',
        type: 'archive',
        pdf: 'https://arxiv.org/pdf/2407.08813',
        link: 'https://arxiv.org/abs/2407.08813'
      },
      {
        title: 'Learning to learn point signature for 3D shape geometry',
        authors: 'Hao Huang, Lingjing Wang, Xiang Li, Shuaihang Yuan, Congcong Wen, Yu Hao, Yi Fang',
        year: '2024',
        venue: 'Pattern Recognition Letters',
        publisher: 'North-Holland',
        img: '',
        type: 'journal',
        pdf: 'https://www.sciencedirect.com/science/article/pii/S0167865524001922/pdfft?md5=bb4b9221d3190309c546f630d40cd942&pid=1-s2.0-S0167865524001922-main.pdf',
        link: 'https://www.sciencedirect.com/science/article/pii/S0167865524001922'
      },
    ]
  },
  {
    year: '2023',
    papers: [
      {
        title: 'Neural gradient learning and optimization for oriented point normal estimation',
        authors: 'Qing Li, Huifang Feng, Kanle Shi, Yi Fang, Yu-Shen Liu, Zhizhong Han',
        year: '2023',
        venue: 'SIGGRAPH Asia 2023 Conference Papers',
        img: '',
        type: 'conference',
        pdf: 'https://dl.acm.org/doi/pdf/10.1145/3610548.3618253',
        link: 'https://dl.acm.org/doi/abs/10.1145/3610548.3618253'
      },
      {
        title: 'How Fair are Medical Imaging Foundation Models?',
        authors: 'Muhammad Osama Khan, Muhammad Muneeb Afzal, Shujaat Mirza, Yi Fang',
        year: '2023',
        venue: 'Machine Learning for Health (ML4H)',
        img: '',
        type: 'conference',
        pdf: 'https://proceedings.mlr.press/v225/khan23a/khan23a.pdf',
        link: 'https://proceedings.mlr.press/v225/khan23a.html'
      },
      {
        title: "MemoryCompanion: A Smart Healthcare Solution to Empower Efficient Alzheimer's Care Via Unleashing Generative AI",
        authors: 'Lifei Zheng, Yeonie Heo, Yi Fang',
        year: '2023',
        venue: 'arXiv preprint arXiv:2311.14730',
        img: '',
        type: 'conference/journal/archive',
        pdf: 'https://arxiv.org/pdf/2311.14730',
        link: 'https://arxiv.org/abs/2311.14730'
      },
    ]
  },
  {
    year: '2022',
    papers: [
      {
        title: 'GP-Aligner: Unsupervised Groupwise Nonrigid Point Set Registration Based on Optimizable Group Latent Descriptor',
        authors: 'Lingjing Wang, Nan Zhou, Hao Huang, Jifei Wang, Xiang Li, Yi Fang',
        year: '2022',
        venue: 'IEEE Transactions on Geoscience and Remote Sensing',
        img: '',
        type: 'journal',
        pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9994035',
        link: 'https://ieeexplore.ieee.org/abstract/document/9994035/'
      },
    ]
  },
  {
    year: '2021',
    papers: [
      {
        title: '3D-metaconnet: meta-learning for 3D shape classification and segmentation',
        authors: 'Hao Huang, Xiang Li, Lingjing Wang, Yi Fang',
        year: ' ',
        venue: '2021 International Conference on 3D Vision (3DV)',
        img: ' ',
        type: 'conference',
        pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9665930',
        link: 'https://ieeexplore.ieee.org/abstract/document/9665930'
      },
    ]
  },
  {
    year: '2020',
    papers: [
      {
        title: '3dmotion-net: Learning continuous flow function for 3d motion prediction',
        authors: 'Shuaihang Yuan, Xiang Li, Anthony Tzes, Yi Fang',
        year: '2020',
        venue: '2020 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
        img: '',
        type: 'conference',
        pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9341671',
        link: 'https://ieeexplore.ieee.org/abstract/document/9341671'
      },
    ]
  },
  {
    year: '2019',
    papers: [
      {
        title: 'An assistive low-vision platform that augments spatial cognition through proprioceptive guidance: Point-to-Tell-and-Touch',
        authors: 'Wenjun Gui, Bingyu Li, Shuaihang Yuan, John-Ross Rizzo, Lakshay Sharma, Chen Feng, Anthony Tzes, Yi Fang',
        year: '2019',
        venue: '2019 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
        img: '',
        type: 'conference/journal/archive',
        pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8967647',
        link: 'https://ieeexplore.ieee.org/abstract/document/8967647'
      },
      {
        title: 'Learning object-specific distance from a monocular image',
        authors: 'Jing Zhu, Yi Fang',
        year: '2019',
        venue: 'Proceedings of the IEEE/CVF International Conference on computer vision',
        img: '001.PNG',
        type: 'conference',
        download: 'https://openaccess.thecvf.com/content_ICCV_2019/papers/Zhu_Learning_Object-Specific_Distance_From_a_Monocular_Image_ICCV_2019_paper.pdf',
        link: 'https://www.computer.org/csdl/proceedings-article/iccv/2019/480300d838/1hVlkaWZcsg'
      },
    ]
  },
  {
    year: '2018',
    papers: [
      {
        title: 'Learning to synthesize 3d indoor scenes from monocular images',
        authors: 'Fan Zhu, Li Liu, Jin Xie, Fumin Shen, Ling Shao, Yi Fang',
        year: '2018',
        venue: 'Proceedings of the 26th ACM international conference on Multimedia',
        img: ' ',
        type: 'conference',
        pdf: 'https://dl.acm.org/doi/pdf/10.1145/3240508.3240700',
        link: 'https://dl.acm.org/doi/abs/10.1145/3240508.3240700'
      },
      {
        title: 'Unsupervised learning of 3D model reconstruction from hand-drawn sketches',
        authors: 'Lingjing Wang, Cheng Qian, Jifei Wang, Yi Fang',
        year: '2018',
        venue: 'Proceedings of the 26th ACM international conference on Multimedia',
        img: ' ',
        type: 'conference',
        pdf: 'https://dl.acm.org/doi/pdf/10.1145/3240508.3240699',
        link: 'https://dl.acm.org/doi/abs/10.1145/3240508.3240699'
      },
    ]
  },
  {
    year: '2017',
    papers: [
      {
        title: 'Arbitext: Arbitrary-oriented text detection in unconstrained scene',
        authors: 'Daitao Xing, Zichen Li, Xin Chen, Yi Fang',
        year: '2017',
        venue: 'arXiv preprint arXiv:1711.11249',
        img: '',
        type: 'archive',
        pdf: 'https://arxiv.org/pdf/1711.11249',
        link: 'https://arxiv.org/abs/1711.11249'
      },
    ]
  },

];

export default allpubs;
