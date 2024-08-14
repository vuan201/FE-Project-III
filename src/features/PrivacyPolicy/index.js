import React from "react";
import BannerHeadPage from "../../components/BannerHeadPage";

const PrivacyPolicy = () => {
  return (
    <>
      <div>
        <BannerHeadPage title={"Chính sách bảo hành"} />
      </div>

      <div className="max-w-container mx-auto w-full px-12 py-9">
        <h4 className="text-[22px]">
          1. Điều kiện áp dụng và thời gian bảo hành:
        </h4>
        <br />
        <h4 className="text-[22px]">Điều kiện áp dụng:</h4>
        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Trong thời gian bảo hành Khách hàng có nhu cầu bảo hành sản phẩm thì
          sẽ miễn phí bảo hành với các trường hợp sau: Hở keo, dứt chỉ, gãy móc
          khoá, bung hoạ tiết trang trí (nơ, nút, hoa, …), lờn gai nỉ.
        </p>

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Thời gian hỗ trợ bảo hành tính từ ngày nhận hàng:
        </p>

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6  pl-5">
          Bảo hành trọn đời với lỗi bong keo, đứt chỉ (vật tư của sản phẩm đủ
          điều kiện tái chế không bị rách, tróc si...).
        </p>

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6  pl-5">
          Với các lỗi khác thời gian bảo hành 3 tháng cho sản phẩm Biti's, 6
          tháng cho sản phẩm Gosto, Hunter.
        </p>

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Nếu quá thời gian bảo hành Khách hàng có nhu cầu bảo hành sản phẩm thì
          sẽ tính phí bảo hành + phí vận chuyển (nếu có) với các trường hợp sau:
          Mòn hay mất tẩy cao su chi tiết rời, gãy khoen khoá, bung hoạ tiết
          trang trí (nơ, nút, hoa, …), lờn gai nỉ.
        </p>

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Khi bảo hành khách hàng phải cung cấp hóa đơn (phiếu xuất hàng) hoặc
          mail xác nhận giao hàng và phiếu bảo hành của sản phẩm.
        </p>

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Thời gian xử lý bảo hành: Từ 1 đến 15 ngày làm việc kể từ ngày nhà máy
          nhận được sản phẩm tùy mức độ hư hỏng.
        </p>

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Không hỗ trợ đối với những sản phẩm có thông báo: không áp dụng đổi
          trả - bảo hành
        </p>

        <h4 className="text-[22px]">2. Địa điểm tiếp nhận bảo hành:</h4>

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Tại tất cả các cửa hàng tiếp thị của Biti’s trên toàn quốc. Danh sách
          cửa hàng tiếp thị tại đây
        </p>

        {/* <p className="mt-4 mb-6 text-sm text-[#868686] leading-6"> */}
        <u>Lưu ý:</u>
        {/* </p> */}

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Trường hợp hết thời gian bảo hành, giày dép hư hỏng do hao mòn tự
          nhiên hoặc bị tác động mạnh từ bên ngoài CHTT tiếp nhận bảo hành tuy
          nhiên chi phí sửa chữa và vận chuyển khách hàng thanh toán.
        </p>

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Hàng chậm, xu hướng chậm không được bảo hành.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
