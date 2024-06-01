import React, { Suspense } from "react";
import PopupButton from "./PopupButton";
import PopupContent from "./PopupContent";
import Loading from "./Loading";

const PopupWrapper: React.FC = () => {
  return (
    <PopupButton>
     {/* 
        Using Suspense to show a loading indicator while waiting for PopupContent to load.
        PopupContent is a server component imported as a child of a client component.
      */}
      <Suspense fallback={<Loading />}>
      <PopupContent />
      </Suspense>
    </PopupButton>
  );
};

export default PopupWrapper;
