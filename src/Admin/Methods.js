export async function postData(url, PostData, fetchedDataHandler) {
  const request = {
    method: "POST",
    headers: { 'Content-Type': 'application/json', 'X-CSRFToken': window.csrfToken },
    body: JSON.stringify(PostData)
  };
  console.log('==postbody=====');
  console.log(request);
  console.log('===============');
  fetch(url, request)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('==post returned data=====');
      console.log(data);
      console.log('=========================');
      if (data.res === 1) {
        fetchedDataHandler(data.payload);
      }
    });
}
export async function fetchData(url, fetchedDataHandler) {
  //fun is the state change method
  const response = await fetch(url);
  const data = await response.json();
  console.log('==get returned data=====');
  console.log(data);
  console.log('=========================');
  if (data.res === 1) {
    fetchedDataHandler(data.payload);
  }
}
export function stop(msg) {
  alert();
  console.log(msg);
}