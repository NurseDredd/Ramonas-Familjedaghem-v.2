import React from "react";

const USPSection = () => {
  return (
    <section className="py-16 px-6 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-2xl font-semibold text-center mb-10 text-amber-900">
          Fördelar med familjedaghem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-8 border border-amber-100 hover:shadow-lg transition-shadow duration-300">
            <span className="text-4xl mb-4">🚀</span>
            <h3 className="text-lg font-semibold mb-2 text-amber-800">
              Personlig omsorg
            </h3>
            <p className="text-gray-700 text-center">
              En liten barngrupp möjliggör att varje barn får mer uppmärksamhet
              och omsorg i en hemtrevlig miljö.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-8 border border-amber-100 hover:shadow-lg transition-shadow duration-300">
            <span className="text-4xl mb-4">💡</span>
            <h3 className="text-lg font-semibold mb-2 text-amber-800">
              En trygg miljö
            </h3>
            <p className="text-gray-700 text-center">
              Familjedaghem erbjuder en hemtrevlig och lugn miljö, vilket kan
              verka mindre stressande för barnen. Ett familjedaghem ger ditt
              barn en säker och lugn plats att växa och lära sig i.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-8 border border-amber-100 hover:shadow-lg transition-shadow duration-300">
            <span className="text-4xl mb-4">📞</span>
            <h3 className="text-lg font-semibold mb-2 text-amber-800">
              Regelbundna aktiviteter
            </h3>
            <p className="text-gray-700 text-center">
              ✔ Skogsutflykt varje vecka <br />
              ✔ Temaarbete varje vecka <br />
              ✔ Biblioteksbesök varje månad <br />✔ Odling under vår och sommar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
