const productList = [
    {
        id: 1,
        image: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i098789-348x464.jpg',
        imageHover: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i567876-348x464.jpg',
        name: 'Blowout Mascara',
        nameSearch: 'blowout mascara',
        price: 500,
        meta: 'Lash Blowout được thiết kế đặc biệt giúp nhẹ nhàng bắt tất cả các sợi mi của bạn và mang lại sự tách biệt đẹp mắt, nâng tức thì và làm dày mi có cấu trúc.',
        description:
            'Được phát triển với sự hợp tác của Drybar, Lash Blowout là loại mascara mang tính thay đổi cuộc chơi mang lại khả năng tách mi đẹp, nâng mi tức thì & làm dày mi gấp 19 lần.',
    },

    {
        id: 2,
        image: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i09879-348x464.jpg',
        imageHover: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i214354-348x464.jpg',
        name: 'Bye Bye Pores',
        nameSearch: 'bye bye pores',
        price: 400,
        meta: 'Bye Bye Pores là một sản phẩm tuyệt vời cho các loại da dầu. Sản phẩm có xu hướng uống hết độ bóng từ phấn nền và che phủ da dầu tốt bằng cách pha trộn liền mạch.',
        description:
            'Bye Bye Pores là một sản phẩm tuyệt vời cho các loại da dầu. Sản phẩm có xu hướng uống hết độ bóng từ phấn nền và che phủ da dầu tốt bằng cách pha trộn liền mạch.',
    },

    {
        id: 3,
        image: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/img-09876-348x464.jpg',
        imageHover: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i67876-348x464.jpg',
        name: 'CC+ Cream',
        nameSearch: 'blowout mascara',
        price: 650,
        meta: 'Kem nền có khả năng điều chỉnh màu sắc, che phủ mang lại lớp nền cực kì hoàn hảo, tự nhiên.',
        description:
            'CC Cream It Cosmetics có công thức dưỡng ẩm, khả năng chống lão hóa và lớp phủ với khả năng chống nắng SPF50+, hoàn toàn làm đều màu da, chống lại sự lão hóa, cải thiện cấu trúc da, tăng độ sáng và độ ẩm cho làn da lên đến 79%, và cho bạn một làn da khỏe mạnh.',
    },

    {
        id: 4,
        image: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i3456789-348x464.jpg',
        imageHover: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i098765-348x464.jpg',
        name: 'Cleansing Balm',
        nameSearch: 'cleansing balm',
        price: 600,
        meta: 'Cleansing Balm là loại sữa rửa mặt 3 trong 1 không chứa sunfat, tẩy trang tức thì và huyết thanh chống lão hóa làm mềm da — tất cả chỉ trong một bước.',
        description:
            'Được phát triển bởi các bác sĩ phẫu thuật thẩm mỹ, loại sữa rửa mặt nhẹ nhàng này sẽ làm sạch hoàn toàn mọi dấu vết trang điểm—kể cả lớp trang điểm mắt không thấm nước—và các tạp chất mà không làm khô hay kích ứng da của bạn',
    },

    {
        id: 5,
        image: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i654346-348x464.jpg',
        imageHover: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i65432456-348x464.jpg',
        name: 'Confidence in a Cleanser',
        nameSearch: 'confidence in a cleanser',
        price: 450,
        meta: 'Confidence in a Cleanser Hydrating Facial Cleanser Serum là loại sữa rửa mặt yêu thích làn da của bạn, kết hợp khả năng làm sạch của sữa rửa mặt tạo bọt với khả năng dưỡng ẩm.',
        description:
            'Confidence in a Cleanser là giải pháp chăm sóc da một bước mang tính đột phá, kết hợp khả năng làm sạch của sữa rửa mặt tạo bọt với khả năng dưỡng ẩm của huyết thanh. Mang lại làn da cảm giác mềm mại, tươi mát và cân bằng hoàn hảo.',
    },

    {
        id: 6,
        image: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i567898-348x464.jpg',
        imageHover: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i456765-348x464.jpg',
        name: 'Cosmetics Powder',
        nameSearch: 'cosmetics powder',
        price: 680,
        meta: 'Kem nền dạng bột dưỡng ẩm chống lão hóa toàn diện mang lại cho bạn sức mạnh để đạt được làn da hoàn hảo không tì vết ngay lập tức.',
        description:
            'Mang lại độ che phủ hoàn hảo với sắc tố cao và được thiết kế để không chỉ che phủ mà còn giúp làn da của bạn đồng thời trông trẻ hơn. Công nghệ chống lão hóa trong công thức này làm mờ lỗ chân lông, nếp nhăn và khuyết điểm, mang lại cho bạn một lớp nền airbrush hoàn hảo trông giống như lụa.',
    },

    {
        id: 7,
        image: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i567876-1-348x464.jpg',
        imageHover: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i67876-348x464.jpg',
        name: 'Cream Illumination',
        nameSearch: 'cream illumination',
        price: 700,
        meta: 'Với kết cấu dạng lỏng, Maybelline Dream Velvet Soft Matte dễ dàng tán đều bằng tay, hoặc chổi mà không bao giờ để lại vệt không đều màu, không gây cảm giác nặng mặt, khó chịu.',
        description:
            'Đây được xem là một trong những loại kem nền tốt nhất của hãng Maybelline, được các beauty blogger bình chọn là 1 trong 12 loại kem nền dòng trung đáng để mua nhất. Sản phẩm có thiết kế dạng tuýp nhựa có nắp đậy tiện dụng thuận tiện cho bảo quản và sử dụng lâu dài.',
    },

    {
        id: 8,
        image: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i56789-348x464.jpg',
        imageHover: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i09879-1-348x464.jpg',
        name: 'Eye Illumination',
        nameSearch: 'eye illumination',
        price: 390,
        meta: 'Bye Bye Under Eye Illumination Anti-Aging Concealer - một loại che khuyết điểm chống thấm nước nổi tiếng của hãng IT Cosmetics.',
        description:
            'Được tạo ra nhờ công nghệ chống lão hoá, với các thành phần như chất chốnh oxi hoá, collagen cấp ẩm, vitamins và gel giữ nước hyaluronic acid giúp che đi quầng thâm, giữ da không bị khô và làm mờ những nếp nhăn trên khuôn mặt.',
    },

    {
        id: 9,
        image: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/img-76567-348x464.jpg',
        imageHover: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/img-345654-348x464.jpg',
        name: 'Lengthening Mascara',
        nameSearch: 'lengthening mascara',
        price: 500,
        meta: 'Mascara này sẽ mang lại cho bạn hàng mi dài hàng dặm! Mascara kéo dài mi có công thức giúp giữ mascara của bạn cố định cả ngày mà không bị lem hay chảy.',
        description:
            'Mascara này được thiết kế đặc biệt để tăng thêm chiều dài cho hàng mi của bạn bằng cách phủ từng sợi mi riêng lẻ và kéo dài nó. Mascara này không thấm nước và có màu đen đậm. Đảm bảo bền màu cả ngày mà không bị bong tróc hay lem.',
    },

    {
        id: 10,
        image: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i0987890-1-348x464.jpg',
        imageHover: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i34567654-348x464.jpg',
        name: 'Pores Poreless',
        nameSearch: 'pores poreless',
        price: 460,
        meta: 'Pores Poreless với Công nghệ làm mờ quang học Bye Bye Pores, collagen thủy phân và lụa thật giúp làm mờ các lỗ chân lông của bạn khỏi tầm nhìn và làm mờ các nếp nhăn.',
        description:
            'Được phát triển dựa trên hiểu biết sâu sắc của bác sĩ phẫu thuật thẩm mỹ cũng như chuyên môn về thành phần và chăm sóc da của bác sĩ da liễu, IT Cosmetics tạo ra các công thức giải quyết vấn đề, yêu thích làn da mang lại cho bạn kết quả rõ ràng.',
    },

    {
        id: 11,
        image: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i0984935-348x464.jpg',
        imageHover: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/i090-348x464.jpg',
        name: 'Setting Spray+',
        nameSearch: 'setting spray+',
        price: 520,
        meta: 'Your Skin But Better Setting Spray+ là loại xịt kéo dài lớp trang điểm và phun sương dưỡng ẩm làm dịu da.',
        description:
            'Sản phẩm cần phải có đa nhiệm này có khả năng giữ lớp trang điểm lên đến 16 giờ để giữ cho lớp trang điểm của bạn trông tươi mới cả ngày đồng thời giúp kiểm soát dầu và độ bóng. Ngoài ra, không giống như các loại xịt khoáng thông thường có thể khiến da bạn cảm thấy khô và căng, loại xịt khoáng không trọng lượng này có tác dụng làm dịu, cấp nước và phục hồi làn da của bạn ngay lập tức.',
    },

    {
        id: 12,
        image: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/img-54345-348x464.jpg',
        imageHover: 'https://beauty.oceanwp.org/wp-content/uploads/2016/08/img-6543456-348x464.jpg',
        name: 'Sleep Night Cream',
        nameSearch: 'sleep night cream',
        price: 620,
        meta: 'Sleep Night Cream hoạt động vào ban đêm để nuôi dưỡng làn da thông qua tẩy da chết. Chỉ sau một giấc ngủ, làn da của bạn sẽ cảm thấy ngậm nước, mịn màng và mềm mại, cộng với ceramides, axit hyaluronic và hương hoa oải hương nhẹ nhàng.',
        description:
            'IT Cosmetics Confidence In Your Beauty Sleep Night Cream là sản phẩm chăm sóc da mới nhất ra mắt của IT Cosmetics. Họ đã có Confidence In A Cream Hydrating Moisturizer, một loại kem dưỡng ẩm ban ngày, và IT Cosmetics Confidence In Your Beauty Sleep Night Cream đã được tạo ra để hoạt động như một loại kem dưỡng ban đêm.',
    },
];

export default productList;
