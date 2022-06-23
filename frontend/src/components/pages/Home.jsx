import React from "react";
import { Button, Carousel, CarouselItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import img from "../assets/svg/img banner.svg";
import picture from "../assets/svg/cardimage.svg";
import image from "../assets/svg/cardimage1.svg";

export default function Home() {
  return (
    <div className="container mt-4">
      <Carousel>
        <CarouselItem>
          <img className="d-block w-100" src={img} alt="First slide" />
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={img} alt="Second slide" />
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={img} alt="Third slide" />
        </CarouselItem>
      </Carousel>
      <div className="col-lg-12 mt-5">
        <p className="font-bold">
          <strong>Telusuri Kategori</strong>
        </p>
      </div>
      <div className="container mt-4">
        <div className="row g-10">
          <Button
            className="btn-purple rounded-16px d-flex justify-content-center align-items-center"
            style={{
              width: "115px",
              height: "48px",
              fontSize: "15px",
              gap: "8px",
            }}
          >
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            Semua
          </Button>
          <Button
            className="btn-light rounded-16px d-flex justify-content-center align-items-center ms-3"
            style={{
              width: "108px",
              height: "48px",
              fontSize: "15px",
              gap: "8px",
            }}
          >
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            Hobi
          </Button>
          <Button
            className="btn-light rounded-16px d-flex justify-content-center align-items-center ms-3"
            style={{
              width: "155px",
              height: "48px",
              fontSize: "15px",
              gap: "8px",
            }}
          >
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            Kendaraan
          </Button>
          <Button
            className="btn-light rounded-16px d-flex justify-content-center align-items-center ms-3"
            style={{
              width: "107px",
              height: "48px",
              fontSize: "15px",
              gap: "8px",
            }}
          >
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            Baju
          </Button>
          <Button
            className="btn-light rounded-16px d-flex justify-content-center align-items-center ms-3"
            style={{
              width: "142px",
              height: "48px",
              fontSize: "15px",
              gap: "8px",
            }}
          >
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            Elektoronik
          </Button>
          <Button
            className="btn-light rounded-16px d-flex justify-content-center align-items-center ms-3"
            style={{
              width: "151px",
              height: "48px",
              fontSize: "15px",
              gap: "8px",
            }}
          >
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            Kesehatan
          </Button>
        </div>
      </div>
      <div className="container mt-4 row row-cols-md-6">
        <div className="row col-sm-6 mx-auto">
          <div className="shadow-md px-2 pt-2 pb-4 w-full md:-w-182px">
            <img src={picture} />
            <p className="mt-2 text-sm font-normal">Jam Tangan Casio</p>
            <p className="mt-1 text-10px font-normal text-gray-900">
              Aksesoris
            </p>
            <p className="mt-2 text-sm font-normal">Rp 250.000</p>
          </div>
        </div>
        <div className="row col-sm-6 mx-auto">
          <div className="shadow-md px-2 pt-2 pb-4 w-full md:-w-182px">
            <img src={image} />
            <p className="mt-2 text-sm font-normal">Jam Tangan Casio</p>
            <p className="mt-1 text-10px font-normal text-gray-900">
              Aksesoris
            </p>
            <p className="mt-2 text-sm font-normal">Rp 250.000</p>
          </div>
        </div>
        <div className="row col-sm-6 mx-auto">
          <div className="shadow-md px-2 pt-2 pb-4 w-full md:-w-182px">
            <img src={picture} />
            <p className="mt-2 text-sm font-normal">Jam Tangan Casio</p>
            <p className="mt-1 text-10pxfont-normal text-gray-900">Aksesoris</p>
            <p className="mt-2 text-sm font-normal">Rp 250.000</p>
          </div>
        </div>
        <div className="row col-sm-6 mx-auto">
          <div className="shadow-md px-2 pt-2 pb-4 w-full md:-w-182px">
            <img src={image} />
            <p className="mt-2 text-sm font-normal">Jam Tangan Casio</p>
            <p className="mt-1 text-10px font-normal text-gray-900">
              Aksesoris
            </p>
            <p className="mt-2 text-sm font-normal">Rp 250.000</p>
          </div>
        </div>
        <div className="row col-sm-6 mx-auto">
          <div className="shadow-md px-2 pt-2 pb-4 w-full md:-w-172px">
            <img src={picture} />
            <p className="mt-2 text-sm font-normal">Jam Tangan Casio</p>
            <p className="mt-1 text-10px font-normal text-gray-900">
              Aksesoris
            </p>
            <p className="mt-2 text-sm font-normal">Rp 250.000</p>
          </div>
        </div>
        <div className="row col-sm-6 mx-auto">
          <div className="shadow-md px-2 pt-2 pb-4 w-full md:-w-182px">
            <img src={image} />
            <p className="mt-2 text-sm font-normal">Jam Tangan Casio</p>
            <p className="mt-1 text-10px font-normal text-gray-900">
              Aksesoris
            </p>
            <p className="mt-2 text-sm font-normal">Rp 250.000</p>
          </div>
        </div>
        <div className="row col-sm-6 mx-auto">
          <div className="shadow-md px-2 pt-2 pb-4 w-full md:-w-182px">
            <img src={image} />
            <p className="mt-2 text-sm font-normal">Jam Tangan Casio</p>
            <p className="mt-1 text-10px font-normal text-gray-900">
              Aksesoris
            </p>
            <p className="mt-2 text-sm font-normal">Rp 250.000</p>
          </div>
        </div>
        <div className="row col-sm-6 mx-auto">
          <div className="shadow-md px-2 pt-2 pb-4 w-full md:-w-182px">
            <img src={picture} />
            <p className="mt-2 text-sm font-normal">Jam Tangan Casio</p>
            <p className="mt-1 text-10px font-normal text-gray-900">
              Aksesoris
            </p>
            <p className="mt-2 text-sm font-normal">Rp 250.000</p>
          </div>
        </div>
        <div className="row col-sm-6 mx-auto">
          <div className="shadow-md px-2 pt-2 pb-4 w-full md:-w-182px">
            <img src={image} />
            <p className="mt-2 text-sm font-normal">Jam Tangan Casio</p>
            <p className="mt-1 text-10px font-normal text-gray-900">
              Aksesoris
            </p>
            <p className="mt-2 text-sm font-normal">Rp 250.000</p>
          </div>
        </div>
        <div className="row col-sm-6 mx-auto">
          <div className="shadow-md px-2 pt-2 pb-4 w-full md:-w-182px">
            <img src={picture} />
            <p className="mt-2 text-sm font-normal">Jam Tangan Casio</p>
            <p className="mt-1 text-10px font-normal text-gray-900">
              Aksesoris
            </p>
            <p className="mt-2 text-sm font-normal">Rp 250.000</p>
          </div>
        </div>
        <div className="row col-sm-6 mx-auto">
          <div className="shadow-md px-2 pt-2 pb-4 w-full md:-w-182px">
            <img src={image} />
            <p className="mt-2 text-sm font-normal">Jam Tangan Casio</p>
            <p className="mt-1 text-10px font-normal text-gray-900">
              Aksesoris
            </p>
            <p className="mt-2 text-sm font-normal">Rp 250.000</p>
          </div>
        </div>
        <div className="row col-sm-6 mx-auto">
          <div className="shadow-md px-2 pt-2 pb-4 w-full md:-w-182px">
            <img src={picture} />
            <p className="mt-2 text-sm font-normal">Jam Tangan Casio</p>
            <p className="mt-1 text-10px font-normal text-gray-900">
              Aksesoris
            </p>
            <p className="mt-2 text-sm font-normal">Rp 250.000</p>
          </div>
        </div>
      </div>
      <Button
        className="btn-purple rounded-16px d-flex justify-content-center align-items-center fixed-bottom"
        style={{
          width: "115px",
          height: "52px",
          fontSize: "15px",
          gap: "16px",
          marginLeft: "650px",
          marginTop: "850px",
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
        Jual
      </Button>
    </div>
  );
}
