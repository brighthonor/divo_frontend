import { ResponsiveLine } from '@nivo/line';
import styled from 'styled-components';
import { borderColor } from '../../styles/ColorStyle';

const DashedSolidLine = ({ series, lineGenerator, xScale, yScale }) => {
  return series.map(({ id, data, color }, index) => (
    <path
      key={id}
      d={lineGenerator(
        data.map((d) => ({
          x: xScale(d.data.x),
          y: yScale(d.data.y)
        }))
      )}
      fill="none"
      stroke={index ? '#aaaaaa' : color}
      style={
        index
          ? {
              // simulate line will dash stroke when index is even
              strokeDasharray: "3, 6",
              strokeWidth: 2,
            }
          : {
              // simulate line with solid stroke
              strokeWidth: 2
            }
      }
    />
  ));
};

const CustomSymbol = ({ size, color, borderWidth, borderColor }) => {
  return (
    <g>        
      <circle fill="#fff" r={size / 2} strokeWidth={borderWidth} stroke={borderColor} />        
      <circle r={size / 5}
        strokeWidth={borderWidth}
        stroke={borderColor}
        fill={color}
        fillOpacity={0.6}
      />
    </g>
  );
};

function PointChart({ data, unit }){
  return (
    <ResponsiveLine
      data={data}
      enableGridX={false}
      pointSymbol={CustomSymbol}
      margin={{
        top: 40,
        left: 80,
        right: 80,
        bottom: 60
      }}
      xScale={{ type: "point" }}
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      colors={['black', '#aaaaaa']}
      pointSize={16}
      pointBorderWidth={1}
      pointBorderColor={{
        from: 'color',
        modifiers: [['darker', 0.3]],
      }}
      pointLabelYOffset={-12}
      enableSlices="x"
      useMesh={true}
      sliceTooltip={({ slice }) => {
        return (
          <S.Tooltip>
            {slice.points.map(point => (
              <S.Flex key={point.id}>
                <S.Date>{point.data.z ? point.data.z : point.data.xFormatted}</S.Date>
                <S.Data>{point.data.y.toLocaleString()}{unit}</S.Data>
              </S.Flex>
            ))}
          </S.Tooltip>
        )
      }}
      layers={[
        // includes all default layers
        "grid",
        "markers",
        "axes",
        "areas",
        "crosshair",
        DashedSolidLine,
        "slices",
        "points",
        "mesh",
        "legends",
      ]}
    />
  );
}

export default PointChart;

const S = {};

S.Tooltip = styled.div`
  background: white;
  padding: 15px 12px 5px 12px;
  border: solid ${borderColor};
  font-family: '';
`;

S.Date = styled.div`
  height: 100%;
  font-weight: bold;
  width: 100px;
`;

S.Data = styled.div`
  font-size: 14px;
  height: 100%;
  color: grey;
`;

S.Flex = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;