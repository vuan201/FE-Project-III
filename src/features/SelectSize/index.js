import React from "react";
import BannerHeadPage from "../../components/BannerHeadPage";

const SizeTable = ({ title, data }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              {Object.keys(data[0]).map((header, index) => (
                <th
                  key={index}
                  className="border border-gray-300 p-2 text-left"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-300 p-2">
                    {typeof cell === "object" ? JSON.stringify(cell) : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// const InstructionStep = ({ number, text }) => {
//   return (
//     <div className="flex items-start mb-4">
//       <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
//         {number}
//       </div>
//       <p>{text}</p>
//     </div>
//   );
// };

const SelectSize = () => {
  const menSizeData = [
    {
      "Size QM Shop": 39,
      "Size US": 6.5,
      "Size UK": 6,
      "Chiều dài bàn chân chuẩn (mm)": 247,
      "Chiều dài bàn chân Tối thiểu - Tối đa (mm)": "241-247",
    },
    {
      "Size QM Shop": 40,
      "Size US": 7,
      "Size UK": 6.5,
      "Chiều dài bàn chân chuẩn (mm)": 253,
      "Chiều dài bàn chân Tối thiểu - Tối đa (mm)": "248-253",
    },
    {
      "Size QM Shop": 41,
      "Size US": 8,
      "Size UK": 7.5,
      "Chiều dài bàn chân chuẩn (mm)": 260,
      "Chiều dài bàn chân Tối thiểu - Tối đa (mm)": "254-260",
    },
    {
      "Size QM Shop": 42,
      "Size US": 8.5,
      "Size UK": 8,
      "Chiều dài bàn chân chuẩn (mm)": 267,
      "Chiều dài bàn chân Tối thiểu - Tối đa (mm)": "261-267",
    },
    {
      "Size Biti's": 43,
      "Size US": 9.5,
      "Size UK": 9,
      "Chiều dài bàn chân chuẩn (mm)": 273,
      "Chiều dài bàn chân Tối thiểu - Tối đa (mm)": "268-273",
    },
    {
      "Size Biti's": 44,
      "Size US": 10,
      "Size UK": 9.5,
      "Chiều dài bàn chân chuẩn (mm)": 280,
      "Chiều dài bàn chân Tối thiểu - Tối đa (mm)": "274-280",
    },
    {
      "Size Biti's": 45,
      "Size US": 11,
      "Size UK": 10.5,
      "Chiều dài bàn chân chuẩn (mm)": 287,
      "Chiều dài bàn chân Tối thiểu - Tối đa (mm)": "281-287",
    },
  ];

  const womenSizeData = [
    {
      "Size Biti's": 35,
      "Size US": 4.5,
      "Size UK": 2.5,
      "Chiều dài bàn chân chuẩn (mm)": 220,
      "Chiều dài bàn chân Tối thiểu - Tối đa (mm)": "214-220",
    },
    {
      "Size Biti's": 36,
      "Size US": 5.5,
      "Size UK": 3.5,
      "Chiều dài bàn chân chuẩn (mm)": 227,
      "Chiều dài bàn chân Tối thiểu - Tối đa (mm)": "221-227",
    },
    {
      "Size Biti's": 37,
      "Size US": 6,
      "Size UK": 4,
      "Chiều dài bàn chân chuẩn (mm)": 233,
      "Chiều dài bàn chân Tối thiểu - Tối đa (mm)": "228-233",
    },
    {
      "Size Biti's": 38,
      "Size US": 7,
      "Size UK": 5,
      "Chiều dài bàn chân chuẩn (mm)": 240,
      "Chiều dài bàn chân Tối thiểu - Tối đa (mm)": "234-240",
    },
    {
      "Size Biti's": 39,
      "Size US": 8,
      "Size UK": 6,
      "Chiều dài bàn chân chuẩn (mm)": 247,
      "Chiều dài bàn chân Tối thiểu - Tối đa (mm)": "241-247",
    },
    {
      "Size Biti's": 40,
      "Size US": 8.5,
      "Size UK": 6.5,
      "Chiều dài bàn chân chuẩn (mm)": 253,
      "Chiều dài bàn chân Tối thiểu - Tối đa (mm)": "248-253",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <BannerHeadPage title={"Hướng dẫn cách chọn Size"} />
      </div>

      <div className="max-w-container mx-auto w-full px-12 py-9">
        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Khi mua hàng tại Biti’s mà không biết chọn size bao nhiêu cho phù hợp.
          Biti’s sẽ hướng dẫn bạn cách đo size giày Biti’s nam, nữ và trẻ em đơn
          giản, nhanh chóng và đúng chuẩn nhé.
        </p>

        <h4 className="text-[22px]">
          Hướng dẫn cách đo size giày Bitis đúng chuẩn
        </h4>
        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Để chọn được đôi giày có size phù hợp với chân của mình, trước hết bạn
          cần nắm được cách đo size chân ứng với size giày như sau:
        </p>
        <h5 className="text-[22px]">Bước 1: Chuẩn bị dụng cụ</h5>

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Bạn cần chuẩn bị một tờ giấy trắng có kích thước lớn hơn bàn chân của
          mình, một chiếc bút và một chiếc thước kẻ.
        </p>

        <h5 className="text-[22px]">Bước 2: Đo kích thước bàn chân</h5>
        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6  pl-5">
          Đầu tiên, bạn đặt tờ giấy trắng đã chuẩn bị xuống sàn phẳng, sau đó
          đặt chân lên và giữ chân một cách chắc chắn ở yên trên tờ giấy đó.
        </p>

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6  pl-5">
          Dùng bút để vẽ lại khung của bàn chân, để xác định được rõ ràng, bạn
          hãy đặt bút thẳng đúng và vuông góc với tờ giấy. Vạch chính xác theo
          đúng khuôn hình của bàn chân.
        </p>

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Bạn cần phải chắc chắn là không được xê dịch chân trong khi tạm nghỉ
          đường vẽ của mình.
        </p>

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Tiến hành đo kích thước của bàn chân.
        </p>
        <h5 className="text-[22px]">
          Bước 3: Phác thảo bàn chân bằng đường thẳng
        </h5>

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Sử dụng thước kẻ, vẽ một đường thẳng bên cạnh mỗi mặt bàn chân: Cạnh
          ngón chân, gót chân và hai bên.
        </p>
        <h5 className="text-[22px]">
          Bước 4: Đo chiều dài và độ rộng của bàn chân
        </h5>

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Sử dụng thước kẻ, đo chiều dài và chiều rộng của hình vuông mà bạn vừa
          vẽ bao quanh hình bàn chân sau đó ghi lại số liệu vừa đo được.
        </p>

        <h4 className="text-[22px] font-bold text-red-500">Bảng size giày </h4>

        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Dưới đây là cách chọn size giày Biti’s, sau khi đo chân và áp dụng quy
          đổi size giày để có thể chọn sao cho phù hợp nhất:
        </p>
        <h4 className="text-[22px] font-bold">Bảng size giày cho Nam </h4>
        <p className="mt-4 mb-6 text-sm text-[#868686] leading-6">
          Với nam giới, dựa vào cách đo size giày để chọn giày như thế nào? Hãy
          xem bảng dưới đây nhé:
        </p>
      </div>
      <SizeTable data={menSizeData} />
      <SizeTable
        title="Hướng dẫn chọn size giày Biti's cho Nữ"
        data={womenSizeData}
      />

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Lưu ý khi chọn size giày:</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Nên chọn size giày vừa vặn với chân, không nên chọn giày quá rộng
            hoặc quá chật.
          </li>
          <li className="mb-2">
            Nếu bạn đang đo vào buổi tối, hãy cộng thêm 3-5mm vì bàn chân thường
            phồng lên vào cuối ngày.
          </li>
          <li className="mb-2">
            Nếu kích thước chân của bạn nằm giữa hai size, hãy chọn size lớn hơn
            để đảm bảo thoải mái.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SelectSize;
