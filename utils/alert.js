import Swal from 'sweetalert2';

export function swalError(params = 'Something went wrong!') {
  return Swal.fire({
    icon: 'error',
    title: 'Error !!!',
    text: params
  });
}

export function swalSuccess(params = 'SUCCESS!', title = 'SUCCESS !!!') {
  return Swal.fire({
    icon: 'success',
    title: title,
    text: params,
    showConfirmButton: false,
    timer: 1500
  });
}

export function swalWarring(params = 'WARRING!', title = 'WARRING !!!') {
  return Swal.fire({
    icon: 'warring',
    title: title,
    text: params
  });
}

export function swalLoading(title = 'กำลังดำเนินการ') {
  return Swal.fire({
    title: title,
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });
}

export function swalClose() {
  return Swal.close();
}