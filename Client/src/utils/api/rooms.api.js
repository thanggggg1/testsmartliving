import axios from "./axios";

export const getRoomsApi = () => {
  return axios.get("https://smartlivingapi.azurewebsites.net/api/House/4");
};

axios.defaults.headers.common['auth'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzAwYmU4LWEzZTQtNGU4ZC05ZjBhLTc2ZDBjN2JmZDRlOSIsIm5iZiI6MTY1ODQxMTc2MCwiZXhwIjoxNjU5MDE2NTYwLCJpYXQiOjE2NTg0MTE3NjB9.HDUhvOfj6ZxCVPirrahvk44GINAF_0c_gF3eNkkXw6o'

export const changeMode = (deviceId,value) =>{
  return axios.post('https://smartlivingapi.azurewebsites.net/api/Command',{
    "userId":"string",
      "deviceId":deviceId,
      "commandTypeId":1,
      "params":`{\"name\":\"Mode\",\"type\":\"mode\",\"value\":\"${value}\",\"options\":{\"cold\":{\"name\":\"Cold\",\"icon\":\"snowflake\"},\"hot\":{\"name\":\"Hot\",\"icon\":\"sun\"},\"fan\":{\"name\":\"Fan\",\"icon\":\"fan\"}}}`,
      "isExecuted":true
  })
}

export const changeTemperature = (deviceId,value)=>{
  return axios.post('https://smartlivingapi.azurewebsites.net/api/Command',{
    "userId":"string",
    "deviceId":deviceId,
    "commandTypeId":2,
    "params":`{\"name\":\"Temperature\",\"type\":\"temperature\",\"unit\":\"c\",\"value\":${value},\"min\":16,\"max\":30}`,
    "isExecuted":true
  })
}
export const changeVane = (deviceId,value)=>{
  return axios.post('https://smartlivingapi.azurewebsites.net/api/Command',{
    "userId":"string",
    "deviceId":deviceId,
    "commandTypeId":3,
    "params":`{\"name\":\"Vane\",\"type\":\"mode\",\"value\":\"${value}\",\"options\":{\"top\":{\"name\":\"Top\"},\"middle\":{\"name\":\"Middle\"},\"bottom\":{\"name\":\"Bottom\"},\"swing\":{\"name\":\"Swing\"}}}`,
    "isExecuted":true
  })
}
export const switchValue = (deviceId)=>{
  return axios.get(`https://smartlivingapi.azurewebsites.net/api/Command/Switch/${deviceId}`)
}