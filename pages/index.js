import React from "react";
import dynamic from "next/dynamic.js";
const Froalacharts = dynamic(() => import("../components/froalacharts"), {
  ssr: false,
});
const dataSource2 = {
  chart: {
    caption: "Caso Totales Barranquilla  ",
    theme: "froala",
    paletteColors: "#F7931A, #3c3c3d, #1A9DF6, #52AF94, #E7BF29, #3D550C",
    numberPrefix: "$",
    defaultCenterLabel: "Total Market Cap<br>$1.02T",
    centerlabel: "$label<br>$value",
    doughnutRadius: "50%",
  },
  data: [
    { label: "Bitcoin", value: "640481178825" },
    { label: "Ethereum", value: "152441577181" },
    { label: "XRP", value: "30193577746" },
    { label: "Tether", value: "26618100965" },
    { label: "WallStreetBets", value: "24846486000" },
    { label: "Others", value: "145419079283" },
  ],
};
export default function Home() {
  const totalBarranquilla = {
    chart: {
      caption: "Casos Totales Barranquilla  ",
      theme: "froala",
      paletteColors: "#F7931A, #3c3c3d, #1A9DF6,#52AF94",
      numberPrefix: "$",
      defaultCenterLabel: "Total de casos",
      centerlabel: "$label<br>$value",
      doughnutRadius: "50%",
    },
    data: [
      { label: "Infectados", value: "640481178825" },
      { label: "Muertes", value: "152441577181" },
      { label: "Curados", value: "30193577746" },
    ],
  };
  const totalInfectados = {
    chart: {
      caption: "Infectados: examen positivo",
      theme: "froala",
      paletteColors: "#45CD0A,#AACD0A, #1A9DF6,#52AF94",
      numberPrefix: "$",
      defaultCenterLabel: "Total de casos positvios",
      centerlabel: "$label<br>$value",
      doughnutRadius: "50%",
    },
    data: [
      { label: "En tratamiento casa", value: "640481178825" },
      { label: "En tratamiento hospital ", value: "152441577181" },
      { label: "En UCI", value: "30193577746" },
      { label: "Muertos", value: "30193577746" },
    ],
  };
  const dataSource = {
    chart: {
      caption: "Infectados: examen positivo",
      theme: "froala",
      paletteColors: "#0000ff, #ff0000",
      numberPrefix: "$",
      defaultCenterLabel: "Total de casos positvios",
      centerlabel: "$label<br>$value",
      doughnutRadius: "50%",
    },
    data: [
      { label: "Positivos", value: "640481178825" },
      { label: "Negativos", value: "152441577181" },
    ],
  };
  return (
    <div>
      <div>
        <div class="flex ">
          <Froalacharts dataSource={totalBarranquilla} />
        </div>
        <div class="flex justify-evenly ">
          <Froalacharts dataSource={totalInfectados} />
          <Froalacharts dataSource={dataSource} />
        </div>
      </div>
    </div>
  );
}
