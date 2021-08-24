const filter = () => {
  if (new URLSearchParams(location.search).get("callid") !== null)
    return new URLSearchParams(location.search).get("billid") !== null
      ? {
          isValid: true,
          isTnx: true,
          callid: new URLSearchParams(location.search).get("callid"),
          billid: new URLSearchParams(location.search).get("billid"),
        }
      : {
          isValid: true,
          isTnx: false,
          callid: new URLSearchParams(location.search).get("callid"),
        };
  else return { isValid: false, isTnx: false };
};

export default filter;
