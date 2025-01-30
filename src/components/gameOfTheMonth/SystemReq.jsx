import { gameOfTheMonth } from "../../constants/gameOfTheMonth";

const SystemReq = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h2 className="font-medium lg:text-xl lg:font-semibold">
          <span className="text-primary">Minimum</span> System Requirments
        </h2>
        <div className="flex flex-1 flex-col justify-between gap-2">
          {Object.entries(gameOfTheMonth.minSystemReq).map(
            ([key, value], i) => (
              <div key={i} className="text-grey2">
                <span className="text-xl font-semibold text-white">
                  {key}:{" "}
                </span>
                {value}
              </div>
            ),
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-medium lg:text-xl lg:font-semibold">
          <span className="text-primary">Recommended</span> System Requirments
        </h2>
        <div className="flex flex-1 flex-col justify-between gap-2">
          {Object.entries(gameOfTheMonth.recSystemReq).map(
            ([key, value], i) => (
              <div key={i} className="text-grey2">
                <span className="text-xl font-semibold text-white">
                  {key}:{" "}
                </span>
                {value}
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default SystemReq;
