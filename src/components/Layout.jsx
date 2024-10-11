import React from 'react';

function Layout(props) {
  return (
    // <div className="flex overflow-x-clip  flex-col rounded-[40px] w-full relative">
      
  <div className="flex overflow-hidden flex-col rounded-[40px] relative ">
  <div className=''>
  <img className='fixed  h-full w-full ' src='https://s3-alpha-sig.figma.com/img/6648/fff9/2dd3d3ca2ea2c2dede710d01d49c2ad1?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~omDuTY6CwvLIWz9KGEleegUYjIDGP6bWsg~-QflM5E1p3q7BWd9~Fwav2-nTZsuaU7JK19ME~WNdZCGix4~Uth71ZjzmQvg6248NRqgLYGkRoAWNec7RUk90-di3Qh4tKtQCqJBEkwcQMZU5qTtgdP12Vl8itNkXIl1bQLYAl8tvvIy9bv84mRqo6Vg1pXYOKbZvaRYeD3rS22lqtPkbxMotIfAx8OhSzjh7NeJqkbX0cLGFuLjFafvF7jw~b82De5Xz0segopI4VDCNKUTkHFxfMK~WwG9RwZojocSLe2-T-4xjYEcfbK7xIoBDSnTLbnUygwGSoowQ3SpHLs~g_' alt=''/>
  </div>
      <div className="flex flex-col w-full mx-auto text-center items-center bg-white rounded-[40px] max-w-[1340px] h-auto relative mt-[650px]"> {/* Changed to relative */}
        {props.children} {/* This will render the Navigation, Video, and Project components */}
      </div>
    </div>
    // </div>
  );
}

export default Layout;
