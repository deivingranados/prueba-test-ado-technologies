import { ServiceApis } from "../../infrastructure/apis/api";

export const getCountry = async () => {
  return fetch(ServiceApis.CountryColombia).then((data) => data.json());
};

export const getAllDepartament = async () => {
  return fetch(ServiceApis.Alldepartament).then((data) => data.json());
};

export const getDetailDepartament = async (id: string) => {
  return fetch(ServiceApis.Alldepartament + id).then((data) => data.json());
};

export const getAllCity = async () => {
  return fetch(ServiceApis.AllCity).then((data) => data.json());
};

export const getDetailCity = async (id: string) => {
  return fetch(ServiceApis.AllCity + id).then((data) => data.json());
};
export const getAllRegion = async () => {
  return fetch(ServiceApis.AllRegion).then((data) => data.json());
};

export const getDetailRegion = async (id: string) => {
  return fetch(ServiceApis.AllRegion + id).then((data) => data.json());
};

export const getAllPresident = async () => {
  return fetch(ServiceApis.AllPresidents).then((data) => data.json());
};

export const getDetailPresident = async (id: string) => {
  return fetch(ServiceApis.AllPresidents + id).then((data) => data.json());
};
