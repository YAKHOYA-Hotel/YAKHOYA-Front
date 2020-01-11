import React, { Component } from 'react';
import L from 'leaflet';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import icon from '../images/icon.png';
import {Link} from 'react-router-dom';
import {FaHotel} from 'react-icons/fa';


// type State = {
//     lat: number,
//     lng: number,
//     zoom: number,
//   }

 

export default class Carte extends Component {

    state = {
      AresEiffel:{
        lat: 48.850433,
        lng: 2.298185,
      },
      Alma:{
        lat: 48.860473,
        lng: 2.300861,
      },
      SaintLazare:{
        lat: 48.876984,
        lng: 2.326929,
      },
      Opera:{
        lat: 48.868274,
        lng: 2.335168,
      },
      Montparnasse:{
        lat: 48.842706,
        lng: 2.326196,
      },
      NeuillyMaillot:{
        lat: 48.880442,
        lng: 2.277920,
      },
      LaVillete:{
        lat: 48.887213,
        lng: 2.386320,
      },
      Puteaux:{
        lat: 48.883810,
        lng: 2.224756,
      },
      LaDefense:{
        lat: 48.888554,
        lng: 2.250558,
      },
      NeuillyEtoile:{
        lat: 48.884206,
        lng: 2.260538,
      },
       zoom: 13,
      }

    AresEiffel = L.icon({
      iconUrl:icon,
      iconSize:[45,55],
      iconAnchor:[12.5,41],
      popupAnchor:[5.5,-37]

    });
    Alma = L.icon({
      iconUrl:icon,
      iconSize:[45,55],
      iconAnchor:[12.5,41],
      popupAnchor:[5.5,-37]

    });
    SaintLazare = L.icon({
      iconUrl:icon,
      iconSize:[45,55],
      iconAnchor:[12.5,41],
      popupAnchor:[5.5,-37]

    });
    Opera = L.icon({
      iconUrl:icon,
      iconSize:[45,55],
      iconAnchor:[12.5,41],
      popupAnchor:[5.5,-37]

    });
    Montparnasse = L.icon({
      iconUrl:icon,
      iconSize:[45,55],
      iconAnchor:[12.5,41],
      popupAnchor:[5.5,-37]

    });
    NeuillyMaillot = L.icon({
      iconUrl:icon,
      iconSize:[45,55],
      iconAnchor:[12.5,41],
      popupAnchor:[5.5,-37]

    });

    LaVillete = L.icon({
      iconUrl:icon,
      iconSize:[45,55],
      iconAnchor:[12.5,41],
      popupAnchor:[5.5,-37]

    });
    Puteaux = L.icon({
      iconUrl:icon,
      iconSize:[45,55],
      iconAnchor:[12.5,41],
      popupAnchor:[5.5,-37]

    });
    LaDefense = L.icon({
      iconUrl:icon,
      iconSize:[45,55],
      iconAnchor:[12.5,41],
      popupAnchor:[5.5,-37]

    });
    NeuillyEtoile = L.icon({
      iconUrl:icon,
      iconSize:[45,55],
      iconAnchor:[12.5,41],
      popupAnchor:[5.5,-37]

    })
    render() {
        const position = [48.861103, 2.344250]
        const AresEifelposition = [this.state.AresEiffel.lat, this.state.AresEiffel.lng]
        const Almaposition = [this.state.Alma.lat, this.state.Alma.lng]
        const SaintLazareposition = [this.state.SaintLazare.lat, this.state.SaintLazare.lng]
        const Operaposition = [this.state.Opera.lat, this.state.Opera.lng]
        const Montparnasseposition = [this.state.Montparnasse.lat, this.state.Montparnasse.lng]
        const NeuillyMaillotposition = [this.state.NeuillyMaillot.lat, this.state.NeuillyMaillot.lng]
        const LaVilleteposition = [this.state.LaVillete.lat, this.state.LaVillete.lng]
        const Puteauxposition = [this.state.Puteaux.lat, this.state.Puteaux.lng]
        const LaDefenseposition = [this.state.LaDefense.lat, this.state.LaDefense.lng]
        const NeuillyEtoileposition = [this.state.NeuillyEtoile.lat, this.state.NeuillyEtoile.lng]
        return (
          <div >
            <Map className="map-large-m" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={AresEifelposition} icon={this.AresEiffel}>
          <Popup>
          <p><h4 className="yakhouya-title-Y">YAKHOUYA PARIS</h4><h5 className="yakhouya-title-H">Ares Eiffel</h5> <h5 className="yakhouya-title-A">7 rue du Général de Larminat, 75015 Paris</h5><p className="yakhouya-title-P">A partir de 180€ la nuit</p></p>
          <Link to='/DetailHotel/Ares-Eiffel'><h6 className="yakhouya-title-L">Réserver</h6></Link>
          </Popup>
        </Marker>

        <Marker position={Almaposition} icon={this.Alma}>
          <Popup>
          <p><h4 className="yakhouya-title-Y">YAKHOUYA PARIS</h4><h5 className="yakhouya-title-H">Alma</h5> <h5 className="yakhouya-title-A">8 Avenue Rapp, 75007 Paris</h5><p className="yakhouya-title-P">A partir de 180€ la nuit</p></p>
          <Link to='/DetailHotel/Alma'><h6 className="yakhouya-title-L">Réserver</h6></Link>
          </Popup>
        </Marker>

        <Marker position={SaintLazareposition} icon={this.SaintLazare}>
          <Popup>
          <p><h4 className="yakhouya-title-Y">YAKHOUYA PARIS</h4><h5 className="yakhouya-title-H">Saint Lazare</h5> <h5 className="yakhouya-title-A">26 Rue d'Amsterdam, 75009 Paris</h5><p className="yakhouya-title-P">A partir de 180€ la nuit</p></p>
          <Link to='/DetailHotel/Saint-Lazare'><h6 className="yakhouya-title-L">Réserver</h6></Link>
          </Popup>
        </Marker>

        <Marker position={Operaposition} icon={this.Opera}>
          <Popup>
          <p><h4 className="yakhouya-title-Y">YAKHOUYA PARIS</h4><h5 className="yakhouya-title-H">Opera</h5> <h5 className="yakhouya-title-A">2 rue Monsigny, 75002 Paris</h5><p className="yakhouya-title-P">A partir de 180€ la nuit</p></p>
          <Link to='/DetailHotel/Opera'><h6 className="yakhouya-title-L">Réserver</h6></Link>
          </Popup>
        </Marker>


        <Marker position={Montparnasseposition} icon={this.Montparnasse}>
          <Popup>
          <p><h4 className="yakhouya-title-Y">YAKHOUYA PARIS</h4><h5 className="yakhouya-title-H">Montparnasse</h5> <h5 className="yakhouya-title-A">39 rue de Montparnasse, 75014 Paris</h5><p className="yakhouya-title-P">A partir de 180€ la nuit</p></p>
          <Link to='/DetailHotel/Montparnasse'><h6 className="yakhouya-title-L">Réserver</h6></Link>
          </Popup>
        </Marker>

        <Marker position={NeuillyMaillotposition} icon={this.NeuillyMaillot}>
          <Popup>
          <p><h4 className="yakhouya-title-Y">YAKHOUYA PARIS</h4><h5 className="yakhouya-title-H">Neuilly-Maillot</h5> <h5 className="yakhouya-title-A">46 rue de Sablonville, 92200 Neuilly-sur-Seine</h5><p className="yakhouya-title-P">A partir de 180€ la nuit</p></p>
          <Link to='/DetailHotel/Neuilly-Maillot'><h6 className="yakhouya-title-L">Réserver</h6></Link>
          </Popup>
        </Marker>

        <Marker position={NeuillyEtoileposition} icon={this.NeuillyEtoile}>
          <Popup>
          <p><h4 className="yakhouya-title-Y">YAKHOUYA PARIS</h4><h5 className="yakhouya-title-H">Neuilly-Etoile</h5> <h5 className="yakhouya-title-A">1 Avenue De Madrid, 92200 Neuilly-sur-Seine</h5><p className="yakhouya-title-P">A partir de 180€ la nuit</p></p>
          <Link to='/DetailHotel/Neuilly-Etoile'><h6 className="yakhouya-title-L">Réserver</h6></Link>
          </Popup>
        </Marker>

        <Marker position={LaDefenseposition} icon={this.LaDefense}>
          <Popup>
          <p><h4 className="yakhouya-title-Y">YAKHOUYA PARIS</h4><h5 className="yakhouya-title-H">La Défense</h5> <h5 className="yakhouya-title-A">3 Boulevard de Neuilly, 92081 Courbevoie</h5><p className="yakhouya-title-P">A partir de 180€ la nuit</p></p>
          <Link to='/DetailHotel/La-Defense'><h6 className="yakhouya-title-L">Réserver</h6></Link>
          </Popup>
        </Marker>

        <Marker position={Puteauxposition} icon={this.Puteaux}>
          <Popup>
          <p><h4 className="yakhouya-title-Y">YAKHOUYA PARIS</h4><h5 className="yakhouya-title-H">Puteaux Médicis</h5> <h5 className="yakhouya-title-A">2 rue Pierre Curie 92800 Puteaux</h5><p className="yakhouya-title-P">A partir de 180€ la nuit</p></p>
          <Link to='/DetailHotel/Puteaux-Medicis'><h6 className="yakhouya-title-L">Réserver</h6></Link>
          </Popup>
        </Marker>

        <Marker position={LaVilleteposition} icon={this.LaVillete}>
          <Popup>
          <p><h4 className="yakhouya-title-Y">YAKHOUYA PARIS</h4><h5 className="yakhouya-title-H">La Villette</h5> <h5 className="yakhouya-title-A">157 Avenue Jean Jaurès, 75019 Paris</h5><p className="yakhouya-title-P">A partir de 180€ la nuit</p></p>
          <Link to='/DetailHotel/La-Villette'><h6 className="yakhouya-title-L">Réserver</h6></Link>
          </Popup>
        </Marker>

        

        



      </Map>
      </div>
        )
    }
}

