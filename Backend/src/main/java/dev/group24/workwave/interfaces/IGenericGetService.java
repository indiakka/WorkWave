package dev.group24.workwave.interfaces;

import java.util.List;

public interface IGenericGetService<T> {
    public List<T> getAll();
    public T getById(Long id) throws Exception;
}
