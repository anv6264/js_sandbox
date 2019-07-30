
export default (store) => (next) => (payload) => {
    const { name } = payload;
    const students = store.getState().students;

    const exist = students.some(el => el.name === name)
    console.warn(state)
    if (!exist){
        next(payload);
    }  
}