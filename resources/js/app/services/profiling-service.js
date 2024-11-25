export async function create_profiling_service(data) {
    const res = await axios.post('/api/profiling',data)
    return res.data.response
}

export async function get_profiling_service() {
    const res = await axios.get('/api/profiling');
    return res.data.response;
}

export async function get_profiling_by_id_service(id) {
    const res = await axios.get('/api/profiling/' +id )
    return res.data.response
}