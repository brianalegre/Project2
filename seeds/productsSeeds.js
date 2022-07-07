const { Products } = require('../models');

const productsData = [
  {
    product_name: 'NZXT H510i',
    description: 'Compact ATX mid-tower PC gaming case',
    price: 98.99,
    stock: 4,
    date_posted: '2021-06-01',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_1/image.jpg',
    category_id: 3,
  },
  {
    product_name:
      'ASUS TUF Gaming GeForce RTX 3070 Ti 8GB GDDR6X PCI Express 4.0',
    description: '8GB 256-Bit GDDR6X',
    price: 699.0,
    stock: 8,
    date_posted: '2022-03-25',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_2/image.jpg',
    category_id: 2,
  },
  {
    product_name: 'Z-EDGE UG27 27in 1080P Monitor',
    description:
      '200Hz 1ms Curved Gaming Monitor, FreeSync, HDR10 compatible, 350cd/m², with RGB Light, Ultra-Slim Bezel, DisplayPort x2, HDMI x2, Built-in Speakers',
    price: 199.5,
    stock: 2,
    date_posted: '2021-02-21',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_3/image.jpg',
    category_id: 1,
  },
  {
    product_name: 'X79 Motherboard LGA2011',
    description:
      'MATX USB3.0 SATA3 PCI-E NVME M.2 SSD X79 LGA 2011 Motherbboard 4 Channel DDR3 Up to 64GB',
    price: 114.99,
    stock: 12,
    date_posted: '2020-01-13',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_4/image.jpg',
    category_id: 4,
  },
  {
    product_name: 'SAMSUNG 870 QVO Series',
    description:
      '8TB SATA III Samsung 4-bit MLC V-NAND Internal Solid State Drive',
    price: 739.95,
    stock: 2,
    date_posted: '2022-06-23',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_5/image.jpg',
    category_id: 5,
  },
  {
    product_name: 'AMD Ryzen 7 5700X',
    description: 'Ryzen 7 5000 Series 8-Core Socket AM4 65W Desktop Processor',
    price: 286.98,
    stock: 31,
    date_posted: '2022-05-01',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_6/image.jpg',
    category_id: 6,
  },
  {
    product_name: 'Rosewill ATX Mid Tower Gaming PC Computer Case',
    description:
      'Aura Sync Compatible Dual Ring RGB LED Fans, Top Mount PSU & HDD/SSD, Tempered Glass & Steel',
    price: 79.98,
    stock: 15,
    date_posted: '2021-03-21',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_7/image.jpg',
    category_id: 3,
  },
  {
    product_name: 'Intel Pentium Gold G6400',
    description:
      'Pentium Gold Comet Lake Dual-Core 4.0 GHz LGA 1200 58W Intel UHD Graphics 610 Desktop Processor',
    price: 59.33,
    stock: 2,
    date_posted: '2018-03-21',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_8/image.jpg',
    category_id: 6,
  },
  {
    product_name: 'ASUS TUF Gaming VG24VQ 24in Monitor',
    description:
      'Full HD 1920 x 1080 1ms MPRT 144Hz 2 x HDMI, DisplayPort AMD FreeSync Asus Eye Care with Ultra Low-Blue Light & Flicker-Free Backlit LED Height Adjustable Curved Gaming Monitor',
    price: 189.99,
    stock: 21,
    date_posted: '2020-12-17',
    product_img: 'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_9/image.jpg',
    category_id: 1,
  },
  {
    product_name: 'Seagate Desktop HDD ST2000DM001 2TB',
    description: '64MB Cache SATA 6.0Gb/s 3.5" Internal Hard Drive Bare Drive',
    price: 54.0,
    stock: 16,
    date_posted: '2020-01-21',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_10/image.jpg',
    category_id: 5,
  },
  {
    product_name: 'Yeston Radeon RX550 2GB GDDR5',
    description: '1071MHz 640processors PCIExpress 3.0 DirectX12 Single Slot',
    price: 129.0,
    stock: 6,
    date_posted: '2019-11-21',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_11/image.jpg',
    category_id: 2,
  },
  {
    product_name: 'GIGABYTE H610M S2H Motherboard',
    description:
      'DDR4 H610 Intel LGA 1700 Micro ATX Motherboard with DDR4, Single M.2, PCIe 4.0, USB 3.2 Gen1, Realtek GbE LAN',
    price: 99.99,
    stock: 6,
    date_posted: '2021-03-01',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_12/image.jpg',
    category_id: 4,
  },
  {
    product_name: 'AMD RYZEN 5 3600',
    description:
      '6-Core 3.6 GHz (4.2 GHz Max Boost) Socket AM4 65W 100-100000031BOX Desktop Processor',
    price: 164.99,
    stock: 13,
    date_posted: '2021-05-13',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_13/image.jpg',
    category_id: 6,
  },
  {
    product_name: 'ASUS ROG Strix Z690-E Gaming Motherboard',
    description:
      'Intel 12th Gen ATX Gaming Motherboard- PCIe 5.0, DDR5, 18+1 Power Stages, 2.5 Gb LAN, Bluetooth v5.2',
    price: 429.99,
    stock: 4,
    date_posted: '2022-04-20',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_14/image.jpg',
    category_id: 4,
  },
  {
    product_name: 'Intel Core i7-10700KF',
    description:
      'Core i7 10th Gen Comet Lake 8-Core 3.8 GHz LGA 1200 125W Desktop Processor',
    price: 289.96,
    stock: 11,
    date_posted: '2021-05-13',
    product_img:
      'https://c1.neweggimages.com/ProductImageCompressAll300/19-118-128-01.jpg',
    category_id: 6,
  },
  {
    product_name: 'Intel Core i5-11400F',
    description:
      'Core i5 11th Gen Rocket Lake 6-Core 2.6 GHz LGA 1200 65W Desktop Processor',
    price: 151.99,
    stock: 5,
    date_posted: '2021-05-13',
    product_img:
      'https://cdn11.bigcommerce.com/s-3kliogr9m/images/stencil/1280x1280/products/382/1415/Box_T4_i5F_11th_H93494_Ang03_Left_V01_HIGHRES_SIMPLIF__91936.1635983492.jpg?c=1',
    category_id: 6,
  },
  {
    product_name: 'Intel Core i5-12600KF',
    description:
      'Core i5 12th Gen Alder Lake 10-Core (6P+4E) 3.7 GHz LGA 1700 125W Desktop Processor',
    price: 259.99,
    stock: 16,
    date_posted: '2021-05-13',
    product_img:
      'https://media.ldlc.com/r1600/ld/products/00/05/90/01/LD0005900180_1.jpg',
    category_id: 6,
  },
  {
    product_name: 'Intel Core i7-12700KF',
    description:
      'Core i7 12th Gen Alder Lake 12-Core (8P+4E) 3.6 GHz LGA 1700 125W Desktop Processor',
    price: 377.98,
    stock: 9,
    date_posted: '2021-05-13',
    product_img:
      'https://www.tradeinn.com/f/13845/138457079/intel-i7-12700kf-box-processor.jpg',
    category_id: 6,
  },
  {
    product_name: 'Intel Core i9-10900K',
    description:
      '6-Core 3.6 GHz (4.2 GHz Max Boost) Socket AM4 65W 100-100000031BOX Desktop Processor',
    price: 389.88,
    stock: 4,
    date_posted: '2021-05-13',
    product_img:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6411/6411492cv11d.jpg',
    category_id: 6,
  },
  {
    product_name: 'Intel Core i3-12100',
    description:
      'Core i3 12th Gen Alder Lake Quad-Core 3.3 GHz LGA 1700 Processor 60W Intel UHD Graphics 730 Desktop Processor',
    price: 129.98,
    stock: 22,
    date_posted: '2021-05-13',
    product_img:
      'https://tabk-aws-s3.s3.us-west-1.amazonaws.com/Products/product_id_13/image.jpg',
    category_id: 6,
  },
  {
    product_name: 'GIGABYTE G27Q 27" 144Hz 1440P Gaming Monitor',
    description:
      '2560 x 1440 IPS Display, 1ms (MPRT) Response Time, 92% DCI-P3, VESA Display HDR400, FreeSync Premium, 1x DisplayPort 1.2',
    price: 249.99,
    stock: 7,
    date_posted: '2020-04-20',
    product_img:
      'https://m.media-amazon.com/images/I/713JEi+CQDL.jpg',
    category_id: 1,
  },
  {
    product_name: 'MSI Optix AG321CQR 32"',
    description:
      'QHD 2560 x 1440 (2K) 165Hz HDMI DisplayPort, Tilt Swivel Pivot Height Adjust AMD FreeSync Premium Curved Gaming Monitor',
    price: 269.99,
    stock: 11,
    date_posted: '2020-04-20',
    product_img:
      'https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/7032186/7032186_o51_et_8060279/7032186',
    category_id: 1,
  },
  {
    product_name: 'ASUS TUF Gaming VG289Q1A 28"',
    description:
      'UHD 3840 x 2160 (4K) 60 Hz 2 x HDMI, DisplayPort, Audio FreeSync Built-in Speakers HDR 10 IPS Gaming Monitor',
    price: 329.99,
    stock: 19,
    date_posted: '2020-04-20',
    product_img:
      'https://m.media-amazon.com/images/I/81CYz-i1nML._AC_SL1500_.jpg',
    category_id: 1,
  },
  {
    product_name: 'GIGABYTE G32QC A 32" 165Hz',
    description:
      '2K QHD 1ms (MPRT), 93% DCI-P3, VESA HDR400, FreeSync Premium Pro, 1 x DisplayPort 1.2, 2 x HDMI 2,0, 2 x USB 3.0 Curved Gaming Monitor',
    price: 279.99,
    stock: 5,
    date_posted: '2020-04-20',
    product_img:
      'https://c1.neweggimages.com/ProductImage/24-012-012-V07.jpg',
    category_id: 1,
  },
  {
    product_name: 'GIGABYTE M28U 28" 144Hz 2160P',
    description:
      'UHD 3840 x 2160 4K SS IPS, 1ms (GTG), 94% DCI-P3, HDR Ready, FreeSync Premium Pro, 1 x DisplayPort 1.4, 2 x HDMI 2.1, 3 x USB 3.0, 1 x USB',
    price: 649.99,
    stock: 2,
    date_posted: '2020-04-20',
    product_img:
      'https://c1.neweggimages.com/ProductImage/24-012-040-V01.jpg',
    category_id: 1,
  },
  {
    product_name: 'Lenovo Q24h-10 24"',
    description:
      '2560 x 1440 (2K) QHD LED Backlit LCD Hub Monitor, USB-C, 75 Hz, 4 ms, AMD FreeSync, 99% sRGB',
    price: 269.99,
    stock: 19,
    date_posted: '2020-04-20',
    product_img:
      'https://www.lenovo.com/medias/66A8GAC6-500-1.png?context=bWFzdGVyfHJvb3R8MzU5NzR8aW1hZ2UvcG5nfGgxOS9oNzMvMTA4NTc5MDg1NjgwOTQucG5nfDk5Njg5Y2ZhNzFkODBkNzdmN2Q1M2QzMGUyN2MyOGNjZmE5NGQ5NWMyYTRkNjM0OWVhMjY1MjIyYjJkOTNmMDU',
    category_id: 1,
  },
  {
    product_name: 'AORUS FV43U 43" QLED',
    description:
      'UHD 4K 3840 x 2160 144Hz 1ms (MPRT) FreeSync Premium Pro, 1 x Display Port 1.4, 2 x HDMI 2.1, 2 x USB 3.0, KVM w/ USB Type-C Gaming Monitor',
    price: 1099.99,
    stock: 4,
    date_posted: '2020-04-20',
    product_img:
      'https://c1.neweggimages.com/ProductImage/24-716-002-V09.jpg',
    category_id: 1,
  },
  {
    product_name: 'LG 24" 24QP500-B 2560 x 1440',
    description:
      'QHD 2K IPS 75Hz HDR10 AMD FreeSync HDMI DisplayPort VESA Tilt Monitor',
    price: 196.99,
    stock: 28,
    date_posted: '2020-04-20',
    product_img:
      'https://www.lg.com/us/images/monitors/md08000261/gallery/medium01.jpg',
    category_id: 1,
  },
  {
    product_name: 'Acer KA272U biipx UM.HX2AA.004 27"',
    description:
      'QHD 2560 x 1440 (2K) 1ms VRB 75 Hz 2 x HDMI, DisplayPort AMD RADEON FreeSync Technology Gaming Monitor',
    price: 249.99,
    stock: 12,
    date_posted: '2020-04-20',
    product_img:
      'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/acer_um_hx2aa_s03_kg272_27_lcd_ips_1627382126_1651388.jpg',
    category_id: 1,
  },
  {
    product_name: 'ASUS 27" 1440P Video Conference Monitor (BE279QSK)',
    description:
      'QHD (2560 x 1440), IPS, Built-in 2MP Webcam, Mic Array, Speakers, Eye Care, Wall Mountable, AI Noise-canceling, USB-C, HDMI, Zoom Certified',
    price: 303.41,
    stock: 9,
    date_posted: '2020-04-20',
    product_img:
      'https://dlcdnwebimgs.asus.com/gain/62aff790-1601-407c-9bc7-88f1b595a257/w692',
    category_id: 1,
  },
  {
    product_name: 'ASRock Z690 Phantom Gaming',
    description:
      'LGA 1700 DDR5 ATX Intel Motherboard',
    price: 149.99,
    stock: 10,
    date_posted: '2021-03-11',
    product_img:
      'https://www.asrock.com/mb/photo/Z690%20Phantom%20Gaming%204D5(M1).png',
    category_id: 4,
  },
  {
    product_name: 'ASUS TUF Gaming Z690-Plus WiFi D4',
    description:
      'LGA 1700 Intel 12th Gen ATX Gaming Motherboard- PCIe 5.0, DDR4, 4xM.2/NVMe SSD, 14+2 Power Stages, WiFi 6, Intel 2.5Gb LAN',
    price: 289.99,
    stock: 6,
    date_posted: '2021-03-11',
    product_img:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-506-V01.jpg',
    category_id: 4,
  },
  {
    product_name: 'GIGABYTE Z690 AORUS MASTER',
    description:
      'LGA 1700 Intel Z690 EATX Motherboard with DDR5, 5x M.2, PCIe 5.0, USB 3.2 Gen2X2 Type-C, Intel WiFi 6E, AQUANTIA 10GbE LAN',
    price: 399.99,
    stock: 12,
    date_posted: '2021-03-11',
    product_img:
      'https://m.media-amazon.com/images/I/81zmlBWaCbL._AC_SL1500_.jpg',
    category_id: 4,
  },
  {
    product_name: 'MSI PRO Z690-A DDR4',
    description:
      'LGA 1700 Intel Z690 SATA 6Gb/s ATX Intel Motherboard',
    price: 194.99,
    stock: 19,
    date_posted: '2021-03-11',
    product_img:
      'https://storage-asset.msi.com/global/picture/image/feature/mb/PRO-Z690-A-DDR4/board02.png',
    category_id: 4,
  },
  {
    product_name: 'MSI MAG B550 TOMAHAWK',
    description:
      'AM4 ATX AMD Motherboard',
    price: 169.99,
    stock: 5,
    date_posted: '2021-03-11',
    product_img:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/13-144-326-V01.jpg',
    category_id: 4,
  },
  {
    product_name: 'GIGABYTE B550 GAMING X V2',
    description:
      'AM4 ATX AMD Motherboard',
    price: 129.99,
    stock: 24,
    date_posted: '2018-02-22',
    product_img:
      'https://www.awd-it.co.uk/media/catalog/product/1/_/1_2_1_1.jpg',
    category_id: 4,
  },
  {
    product_name: 'ASRock B550 Phantom',
    description:
      'Gaming-ITX/ax AM4 Mini ITX AMD Motherboard',
    price: 159.99,
    stock: 17,
    date_posted: '2018-02-22',
    product_img:
      'https://www.awd-it.co.uk/media/catalog/product/1/_/1_2_1_1.jpg',
    category_id: 4,
  },
  {
    product_name: 'MSI MEG Z590 UNIFY',
    description:
      'LGA 1200 ATX Intel Motherboard',
    price: 219.99,
    stock: 11,
    date_posted: '2021-02-22',
    product_img:
      'https://storage-asset.msi.com/global/picture/image/feature/mb/Z490/MPG/box8.png',
    category_id: 4,
  },
  {
    product_name: 'GIGABYTE Z690I AORUS ULTRA LITE DDR4',
    description:
      'LGA 1700 Intel Z690 SATA 6Gb/s Mini ITX Intel Motherboard',
    price: 150.99,
    stock: 16,
    date_posted: '2022-01-21',
    product_img:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/13-145-396-04.jpg',
    category_id: 4,
  },
  {
    product_name: 'ASUS Prime X570-Pro',
    description:
      'Ryzen 3 AM4 with PCIe Gen4, Dual M.2, HDMI, SATA 6Gb/s USB 3.2 Gen 2 ATX Motherboard',
    price: 259.99,
    stock: 13,
    date_posted: '2022-01-27',
    product_img:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-196-V01.jpg',
    category_id: 4,
  },
  {
    product_name: 'LISM X99 S3 Gaming Motherboard',
    description:
      'LGA2011 V3 Support Intel XEON E5 DDR4 ECC REG Memory NVME USB3.0 ATX Server Support Turbo boost',
    price: 179.99,
    stock: 8,
    date_posted: '2021-02-12',
    product_img:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/B601S220101JqxcG.jpg',
    category_id: 4,
  },
  {
    product_name: 'B250C BTC Mining Machine Motherboard',
    description:
      'USB 3.0 to PCI-E X1 Graphics Card Support LGA 1151 DDR4 SATA3.0 for Miner',
    price: 164.99,
    stock: 6,
    date_posted: '2022-01-11',
    product_img:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/B601S220429aaJEV.jpg',
    category_id: 4,
  },
  {
    product_name: 'GIGABYTE Z690 AORUS TACHYON',
    description:
      'LGA 1700 Intel Z690 EATX Motherboard with DDR5, Quad M.2, PCIe 5.0, USB 3.2 Gen2X2 Type-C, Intel WiFi 6E, Intel 2.5 GbE LAN',
    price: 499.99,
    stock: 17,
    date_posted: '2022-01-11',
    product_img:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/13-145-364-V01.jpg',
    category_id: 4,
  },
  {
    product_name: 'GIGABYTE Gaming GeForce RTX 3070 Ti 8GB',
    description:
      'GDDR6X PCI Express 4.0 ATX Video Card GV-N307TGAMING OC-8GD',
    price: 719.99,
    stock: 6,
    date_posted: '2022-01-11',
    product_img:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/14-932-443-09.jpg',
    category_id: 2,
  },
  {
    product_name: 'ASUS Dual Radeon RX 6500 XT 4GB',
    description:
      'GDDR6 PCI Express 4.0 CrossFireX Support Video Card DUAL-RX6500XT-O4G',
    price: 229.99,
    stock: 18,
    date_posted: '2020-02-20',
    product_img:
      'https://dlcdnwebimgs.asus.com/gain/061aa483-f00a-4fd9-bed4-056123a546d1/',
    category_id: 2,
  },
  {
    product_name: 'GIGABYTE Gaming GeForce RTX 3090 Ti 24GB',
    description:
      'GDDR6X PCI Express 4.0 ATX Video Card GV-N309TGAMING OC-24GD',
    price: 2149.99,
    stock: 2,
    date_posted: '2022-06-11',
    product_img:
      'https://img.computerunivers.net/images/1000/9089279436AAAFC6B8F648D58230F5D9.jpg',
    category_id: 2,
  },
  {
    product_name: 'ASRock Radeon RX 6900 XT PHANTOM GAMING D 16GB',
    description:
      'GDDR6 AMD RDNA2 (RX6900XT PGD 16GO)',
    price: 798.99,
    stock: 24,
    date_posted: '2021-01-19',
    product_img:
      'https://www.asrock.com/Graphics-Card/photo/Radeon%20RX%206900%20XT%2016G(M1).png',
    category_id: 2,
  },
  {
    product_name: 'GIGABYTE Vision OC GeForce RTX 3070 8GB',
    description:
      'GDDR6 PCI Express 4.0 ATX Video Card GV-N3070VISION OC-8GD (rev. 2.0) (LHR)',
    price: 609.99,
    stock: 5,
    date_posted: '2021-08-21',
    product_img:
      'https://m.media-amazon.com/images/I/81CF1ZOc5oL._AC_SL1500_.jpg',
    category_id: 2,
  },
  {
    product_name: 'MSI Mech Radeon RX 6600 XT 8GB',
    description:
      'GDDR6 PCI Express 4.0 ATX Video Card RX 6600 XT MECH 2X 8G OC',
    price: 354.99,
    stock: 15,
    date_posted: '2020-12-12',
    product_img:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6476/6476228_sd.jpg',
    category_id: 2,
  },
  {
    product_name: 'MSI Gaming GeForce RTX 3090 Ti 24GB',
    description:
      'GDDR6X PCI Express 4.0 SLI Support ATX Video Card RTX 3090 TI GAMING X TRIO 24G',
    price: 1849.99,
    stock: 6,
    date_posted: '2022-05-11',
    product_img:
      'https://c1.neweggimages.com/ProductImage/14-137-728-20.jpg',
    category_id: 2,
  },
  {
    product_name: 'GIGABYTE AORUS GeForce RTX 3070 Ti 8GB',
    description:
      'GDDR6X PCI Express 4.0 ATX Video Card GV-N307TAORUS M-8GD',
    price: 799.99,
    stock: 2,
    date_posted: '2021-12-22',
    product_img:
      'https://c1.neweggimages.com/ProductImage/14-932-441-01.jpg',
    category_id: 2,
  },
  {
    product_name: 'ASUS ROG Strix NVIDIA GeForce RTX 3080 OC Edition',
    description:
      'PCIe 4.0, 12GB GDDR6X, LHR, HDMI 2.1, DisplayPort 1.4a, Axial-tech Fan Design, 2.9-slot, Super Alloy Power II, GPU Tweak II, Intel WiFi 6E, Intel 2.5 GbE LAN',
    price: 1139.00,
    stock: 3,
    date_posted: '2022-05-11',
    product_img:
      'https://dlcdnwebimgs.asus.com/gain/18306F07-8796-408A-94DF-316149D3E5B9/w717/h525',
    category_id: 2,
  },
  {
    product_name: 'GIGABYTE Vision OC GeForce RTX 3080 10GB',
    description:
      '10GB GDDR6X PCI Express 4.0 ATX Video Card GV-N3080VISION OC-10GD (rev. 2.0) (LHR)',
    price: 839.99,
    stock: 7,
    date_posted: '2022-03-01',
    product_img:
      'https://m.media-amazon.com/images/I/71Nvq5PRo8S._AC_SL1500_.jpg',
    category_id: 2,
  },
  {
    product_name: 'EVGA GeForce RTX 3080 FTW3 ULTRA GAMING Video Card',
    description:
      '10GB GDDR6X, iCX3 Technology, ARGB LED, Metal Backplate, LHR',
    price: 869.99,
    stock: 2,
    date_posted: '2022-03-12',
    product_img:
      'https://c1.neweggimages.com/ProductImage/14-487-541-V01.jpg',
    category_id: 2,
  },
  {
    product_name: 'GIGABYTE GAMING OC Radeon RX 6500 XT 4GB',
    description:
      'GDDR6 PCI Express 4.0 ATX Video Card GV-R65XTGAMING OC-4GD',
    price: 249.99,
    stock: 10,
    date_posted: '2019-05-11',
    product_img:
      'https://m.media-amazon.com/images/I/71xoI1ZHjtL._AC_SS450_.jpg',
    category_id: 2,
  },
  {
    product_name: 'MSI Ventus GeForce RTX 3080 12GB',
    description:
      'GDDR6X PCI Express 4.0 Video Card RTX 3080 VENTUS 3X PLUS 12G OC LHR',
    price: 799.99,
    stock: 2,
    date_posted: '2021-11-15',
    product_img:
      'https://m.media-amazon.com/images/I/71x1PhCp6iL._AC_SS450_.jpg',
    category_id: 2,
  },
  {
    product_name: 'LIAN LI LANCOOL 215 W White Steel',
    description:
      'Tempered Glass ATX Mid Tower Computer Case, Lancool 215 W',
    price: 99.99,
    stock: 5,
    date_posted: '2021-03-21',
    product_img:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/AFSTS211209cunwR.jpg',
    category_id: 3,
  },
  {
    product_name: 'Corsair 4000D Airflow CC-9011200-WW Black Steel',
    description:
      'Plastic / Tempered Glass ATX Mid Tower Computer Case',
    price: 104.99,
    stock: 5,
    date_posted: '2021-03-21',
    product_img:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6424/6424213_sd.jpg;maxHeight=640;maxWidth=550',
    category_id: 3,
  },
  {
    product_name: 'Fractal Design Meshify C White - White Steel',
    description:
      'Tempered Glass ATX Mid Tower High-Airflow Compact Clear Tempered Glass Computer Case',
    price: 99.99,
    stock: 9,
    date_posted: '2020-09-22',
    product_img:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/11-352-087-V01.jpg',
    category_id: 3,
  },
  {
    product_name: 'CORSAIR iCUE 5000X RGB Tempered Glass Mid-Tower ATX',
    description:
      'PC Smart Case, White, CC-9011213-WW',
    price: 184.99,
    stock: 2,
    date_posted: '2021-03-21',
    product_img:
      'https://www.tejar.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/o/corsair_icue_5000x_rgb_tempered_glass_mid-tower_atx_pc_smart_case_-_white1_-_tejar.jpg',
    category_id: 3,
  },
  {
    product_name: 'CORSAIR 5000D Tempered Glass Mid-Tower ATX PC Case',
    description:
      'White, CC-9011209-WW',
    price: 129.99,
    stock: 11,
    date_posted: '2021-03-21',
    product_img:
      'https://cwsmgmt.corsair.com/pdp/5000-series/images/2-5000d-clean-and-cool.png',
    category_id: 3,
  },
  {
    product_name: 'Fractal Design Meshify C Black ATX',
    description:
      'High-Airflow Compact Dark Tint Tempered Glass Window Mid Tower Computer Case',
    price: 99.99,
    stock: 7,
    date_posted: '2021-03-21',
    product_img:
      'https://www.fractal-design.com/wp-content/uploads/2019/06/Meshify-C-TGL_1.jpg',
    category_id: 3,
  },
  {
    product_name: 'Cooler Master MasterBox MB530P Black ATX Mid-Tower',
    description:
      'Three Tempered Glass Panels, Front Side Mesh Intakes, Three 120mm ARGB Lighting Fans',
    price: 139.99,
    stock: 9,
    date_posted: '2021-03-21',
    product_img:
      'https://c1.neweggimages.com/ProductImage/11-119-354-V93.jpg',
    category_id: 3,
  },
  {
    product_name: 'Phanteks Eclipse P300A High Airflow Full-Metal Mesh Design',
    description:
      'Compact ATX Mid-Tower, 120mm Black Case Fan, Black, PH-EC300ATG_BK01',
    price: 79.99,
    stock: 24,
    date_posted: '2021-03-21',
    product_img:
      'https://c1.neweggimages.com/ProductImage/11-854-097-V12.jpg',
    category_id: 3,
  },
  {
    product_name: 'Fractal Design Torrent RGB Black E-ATX',
    description:
      'Tempered Glass Window High-Airflow Mid Tower Computer Case',
    price: 229.99,
    stock: 4,
    date_posted: '2021-03-21',
    product_img:
      'https://c1.neweggimages.com/ProductImage/11-352-146-01.jpg',
    category_id: 3,
  },
  {
    product_name: 'Antec Dark League DF800 FLUX',
    description:
      'FLUX Platform, 5 x 120 mm Fans Included, ARGB & PWM Fan Controller, Tempered Glass Side Panel, Geometrical Mesh Front, Mid-Tower ATX Gaming Case',
    price: 124.99,
    stock: 10,
    date_posted: '2021-03-21',
    product_img:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/11-129-280-10.jpg',
    category_id: 3,
  },
  {
    product_name: 'Seagate SkyHawk ST6000VX001 6TB 3.5" Internal Hard Drive',
    description: 'SATA 6.0Gb/s- 256MB Buffer - OEM',
    price: 129.99,
    stock: 18,
    date_posted: '2020-01-21',
    product_img:
      'https://www.bhphotovideo.com/images/images2000x2000/seagate_st6000vx001_6tb_skyhawak_7200_rpm_1666826.jpg',
    category_id: 5,
  },
  {
    product_name: 'TOSHIBA 4TB Canvio Advance Portable External Hard Drive',
    description: 'USB 3.0 Model HDTCA40XR3CA Red',
    price: 93.99,
    stock: 5,
    date_posted: '2020-01-21',
    product_img:
      'https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/7986019/7986019_o04_081821/7986019',
    category_id: 5,
  },
  {
    product_name: 'Seagate 4TB One Touch Portable Hard Drive',
    description: 'USB 3.2 Gen 1 (USB 3.0) Model STKC4000403 Red',
    price: 99.99,
    stock: 6,
    date_posted: '2020-01-21',
    product_img:
      'https://www.bhphotovideo.com/images/images2500x2500/seagate_stkc4000403_4tb_one_touch_portable_1595201.jpg',
    category_id: 5,
  },
  {
    product_name: 'TOSHIBA X300 HDWR460XZSTA 6TB',
    description: '7200 RPM 256MB Cache SATA 6.0Gb/s 3.5" Desktop Internal Hard Drive',
    price: 145.99,
    stock: 10,
    date_posted: '2020-01-21',
    product_img:
      'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com//640245_308643_03_package_zoom.jpg',
    category_id: 5,
  },
  {
    product_name: 'WD Elements 18TB External Hard Drive',
    description: 'USB 3.0, Micro-B Desktop External Hard Drive WDBWLG0180HBK-NESN Black',
    price: 479.99,
    stock: 4,
    date_posted: '2020-01-21',
    product_img:
      'https://www.bhphotovideo.com/images/images2500x2500/wd_wdbwlg0180hbk_nesn_wd_elements_desktop_18tb_1604997.jpg',
    category_id: 5,
  },
  {
    product_name: 'Seagate IronWolf 8TB NAS Hard Drive',
    description: '7200 RPM 256MB Cache SATA 6.0Gb/s CMR 3.5" Internal HDD for RAID Network Attached Storage ST8000VN004 - OEM',
    price: 184.99,
    stock: 19,
    date_posted: '2020-01-21',
    product_img:
      'https://c1.neweggimages.com/ProductImage/22-184-796-V08.jpg',
    category_id: 5,
  },
  {
    product_name: 'Western Digital Blue 2TB Desktop Hard Disk Drive',
    description: '7200 RPM SATA 6Gb/s 256MB Cache 3.5 Inch - WD20EZBX - OEM',
    price: 49.99,
    stock: 31,
    date_posted: '2020-01-21',
    product_img:
      'https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-blue-desktop-sata-hdd/gallery/wd-blue-pc-desktop-hard-drive-2tb.png',
    category_id: 5,
  },
  {
    product_name: 'Western Digital Blue 2.5" 4TB SATA III 3D NAND Internal Solid State Drive',
    description: 'SATA III 6 Gb/s, 2.5"/7mm, Up to 560 MB/s - WDS400T2B0A',
    price: 399.77,
    stock: 5,
    date_posted: '2021-02-21',
    product_img:
      'https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-blue-3d-nand-sata-ssd/gallery/4tb/wd-blue-3d-nand-sata-ssd-4tb-front.png',
    category_id: 5,
  },
  {
    product_name: 'Crucial MX500 2TB Internal Solid State Drive',
    description: '3D NAND SATA 2.5 Inch Internal SSD, up to 560 MB/s - CT2000MX500SSD1',
    price: 199.99,
    stock: 9,
    date_posted: '2021-05-24',
    product_img:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/20-156-175-V01.jpg',
    category_id: 5,
  },
  {
    product_name: 'SAMSUNG 870 EVO Series 2.5" 2TB',
    description: 'SATA III V-NAND Internal Solid State Drive (SSD) MZ-77E2T0B/AM',
    price: 189.99,
    stock: 13,
    date_posted: '2019-08-30',
    product_img:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/20-147-794-V01.jpg',
    category_id: 5,
  },
];

const seedProducts = () => Products.bulkCreate(productsData);

module.exports = seedProducts;