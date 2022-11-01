import yhHttp from "../../../yhhttp";

const yh = yhHttp.getInstance()

const getWord = (name:string) => {
    return yh.get(`/api/${name}`).then(res => {
        return res
    })
}


export { getWord }