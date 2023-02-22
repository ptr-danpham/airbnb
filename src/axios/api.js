import instance from './instance';

export default {
    getList: (pageNum, pageSize) => instance.get(`?pageNum=${pageNum}&pageSize=${pageSize}`),
    getDetailRoom: (id) => instance.get(`room/${id}`),
};