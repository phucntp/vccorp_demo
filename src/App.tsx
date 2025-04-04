import "./App.css";

function App() {
  return (
    <div className="relative flex items-center justify-end h-screen w-[375px] sm:w-[640px] md:[768px] lg:w-[1024px] bg-[url('/images/Background_SM.png')] lg:bg-[url('/images/Background.png')] sm:bg-[url('/images/Background.png')] bg-right-top bg-cover overflow-hidden">
      <div className="w-[260px] h-[358px] top-[-36px] left-0 p-0 sm:left-[-20px] sm:top-[118px] sm:w-[324px] sm:h-[420px] sm:p-[20px] lg:left-[-20px] lg:top-[118px] lg:w-[455px] lg:h-[587px] lg:p-[20px] bg-[url('/images/border_1.png')] bg-right-top bg-cover absolute">
        <img
          src="/images/doctor_2.png"
          alt="Doctor 2"
          className="w-full h-full object-contain sm:object-cover lg:object-cover ml-[-8px] mt-[1px] sm:mt-0 sm:ml-[-8px] lg:mt-0 lg:ml-[-8px]"
        />
      </div>
      <div className="w-[56px] h-[63px] top-[24px] right-[95px] sm:w-[120px] sm:h-[135px] lg:w-[147px] lg:h-[166px] absolute sm:left-[217px] sm:top-[142px] lg:left-[280px] lg:top-[142px]">
        <img
          src="/images/Vector.png"
          alt="Vector"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[50px] h-[50px] top-[104px] right-[-6px] sm:hidden absolute lg:hidden">
        <img
          src="/images/Vector_2.png"
          alt="Vector"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[226px] top-[154px] right-[70px] h-[256px] sm:w-[280px] sm:h-[317px] lg:w-[400px] lg:h-[453px] p-[3px] sm:p-[6px] lg:p-[6px] bg-[url('/images/border_2.png')] bg-right-top bg-cover absolute sm:left-[75px] sm:top-[368px] lg:left-[140px] lg:top-[480px]">
        <img
          src="/images/doctor_1.png"
          alt="Doctor 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center text-left absolute sm:right-[0px] lg:right-[100px] px-0 lg:px-[56px] sm:px-[58px] flex flex-col h-full w-full sm:w-[352px] lg:w-[352px]">
        <div className="absolute text-[16px] sm:text-[20px] lg:text-[28px] text-[#fff] sm:top-[212px] md:top-[282px] lg:top-[302px] bottom-[150px] px-[54px] sm:px-[36px] lg:px-0">
          Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá đơn
          giản. Tôi biết những người yêu mến tôi là vì sự chân thật và giản dị.
        </div>
        <div className="absolute bottom-[50px] sm:bottom-[115px] lg:bottom-[115px] px-[54px] lg:px-0">
          <p className="text-yellow-400 text-[28px] font-bold">THU QUỲNH</p>
          <p className="text-[18px] text-[#fff]">Bác sĩ</p>
        </div>
      </div>
    </div>
  );
}

export default App;
