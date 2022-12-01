import { HTTP, HTTPS } from '../constants/api';

/**
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @return {String} - url с HTTPS
 */
export const changeHTTP = (url: any) => {
    return url ? url.replace(HTTP, HTTPS) : url;
}

/**
 * Отправляет запрос Fetch
 * @param {String} url - url для запроса
 * @return {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url: string) => {
	try {
		const res = await fetch(url);

		if (!res.ok) {
			console.error('Could not fetch.', res.status);
			return false;
		}

		return await res.json();
	} catch (error: any) {
		console.error('Could not fetch.', error.message);
		return false;
	}
}

/**
 * Отправляет несколко запросов Fetch из массива URL
 * @param {Array<String>} urls - массив с URL для запроса
 * @return {Promise} - Promise с результатом запросов
 */
export const makeConcurrentRequest = async (urls: any) => {
    const res = await Promise.all(urls.map((res: any) => {
		return fetch(res).then(res => res.json())
	 }))

	 return res;
};