const botoia = document.getElementById('botoia');

const showSweetAlert = (title, text, callback) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'ez in klik',
    confirmButtonText: 'Utzi!'
  }).then(callback);
};

botoia.addEventListener('click', () => {
  Swal.fire({
    title: 'JAJAJAJAJAJA',
    text: 'nik be ez dot sinesten honek funtzionetan dauela, bueno, hau ohar bat da, azkenengo botoiek ez daue eze iten (ulertukozu)',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://sweetalert2.github.io/images/nyan-cat.gif")
      left top
      no-repeat
    `
  }).then(()=> {

  
  showSweetAlert('botoia ez klikatzeko esan, ta klikau in dozu?', 'Bigarren aukera dauketzu hau bertan bera uzteko!', (result) => {
    if (result.isConfirmed) {
      showSweetAlert('Formal formal', 'Oso ondo, formal formal, gustetan jaten moduan', (result) => {
        if (result.isConfirmed) {
          showSweetAlert('Zelan ba???', 'Ze, jutia gurozu?', (result) => {
            if (result.isConfirmed) {
              showSweetAlert('EEEE', 'Abandonas?', (result) => {
                if (result.isConfirmed) {
                  showSweetAlert('Ajam', 'Oso ondo pentzetan jat jun nahi izetia... baina', (result) => {
                    if (result.isConfirmed) {
                      showSweetAlert('je je je', 'Ondio ez, jeje', null);
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      showSweetAlert(':/', 'EEEEE, BOTOIA EZ SAKATZEKO ESANTZUT!', null);
                    }
                  });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  showSweetAlert('EZ ITEKO KLIK ESAN DOOOT!!!', 'Atzenien resulta etzarela hain formala . . .', (result) => {
                    if (result.isConfirmed) {
                      showSweetAlert('Bueno...', 'Sikiera akatsa konpontzen zabitz', null);
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      showSweetAlert('joder', 'ez dot hau inoiz amaituko, mas te vale gustetia ta dana ikustia, ze hartu dot lan oso tonto bat, Y TODO POR UN PUTO } :(( pagame un psicólogo dios', null);
                    }
                  });
                }
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              showSweetAlert('poker', 'ta instaletan ba dozu windows xp ta jolasten ba dozu pinballian?', (result) => {
        if (result.isConfirmed) {
          showSweetAlert('ba hori, proposaukotzut planak', 'esnau, ta in unos cuantos burpees eguna ondo hasteko', (result) => {
            if (result.isConfirmed) {
              showSweetAlert('ya k ondo portau zaren', 'gosaldu kolakaua galletekin', (result) => {
                if (result.isConfirmed) {
                  showSweetAlert('mmm', 'in zeike pino puente, izango zan oso dibertigarria (edo ez)', (result) => {
                    if (result.isConfirmed) {
                      showSweetAlert('besteeela', 'erosi poni bat eta margotu multicolor, jarriyozu adar bat eta esan adarbakar bat dala ta jun telebistara (pintxau ondo, k luego destiñe y haces el ridiculo)', null);
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      showSweetAlert('beste plana', 'in lo antsumiekin batera', null);
                    }
                  });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  showSweetAlert('fua', 'arima hackeatuko zaizkizut e', (result) => {
                    if (result.isConfirmed) {
                      showSweetAlert('mission aborted', 'ya ez naz hain hackerra', null);
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      showSweetAlert('osatuta', 'oso guapo zaz, webcama hackeatu zaitzaikuzukete', null);
                    }
                  });
                }
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              showSweetAlert('ez zare ondo portau', 'gosaldu mosto bat', (result) => {
                if (result.isConfirmed) {
                  showSweetAlert('._.', 'ba... oin orraztu', (result) => {
                    if (result.isConfirmed) {
                      showSweetAlert('amaitu die pop-upak, dios, zelako lan tontue hau iteko', 'kodigua ikusten ba dozu... laburtuta dau', null);
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      showSweetAlert('ASKI DA', 'beste botoiai emuteko ordue da e!', null);
                    }
                  });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  showSweetAlert('honekin nitaz akordauko zare e', 'como me gusta discutir, hasta por un puñetero script. Onena da hau ezin dotzuela banneau jaja, puedo tocarte los huevos siempre k abras esto, aaaaaaaa gosetuta nau', (result) => {
                    if (result.isConfirmed) {
                      showSweetAlert('bueno', 'azkeneko botoia sikiera ona izen da', null);
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      showSweetAlert('ya hona helduta', 'bada ordua galdetzeko, ia ein ditxuzun etxeko lanak, oso aspetuta egon bier zare hemen jarraitzeko', null);
                    }
                  });
                }
              });
            }
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          showSweetAlert('Baina baina', 'Bihurri lotsagabe bat zara.', (result) => {
            if (result.isConfirmed) {
              showSweetAlert('Oso goso', 'Proyecto Hombren dauen yonki bat zare, vamos con intencion de recuperar.', (result) => {
                if (result.isConfirmed) {
                  showSweetAlert('Mmmm', 'Rehabilitauta zazela esango neuke, karamelo bat zuretzat.', null);
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  showSweetAlert('Recaiste wei', 'Hau izen da Proyecto Hombrera doien yonki bat urten ta 3 gramo sartzia moduan.', null);
                }
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              showSweetAlert('Klik in dozu. . .', 'bihurri maltzurra zara', (result) => {
                if (result.isConfirmed) {
                  showSweetAlert('bueno...', 'Aprobetxau dozu aukeria formala izateko, sikiera...', null);
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  showSweetAlert('bada ordua', 'zerbait janbikou ez? gosetuta nabil, in makarroi batzuk?', null);
                }
              });
            }
          });
        }
      })
            }
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          showSweetAlert('Ez da posible!', 'Ezin liteke.', (result) => {
            if (result.isConfirmed) {
              showSweetAlert('Amén', 'Va usted por el camino del señor.', (result) => {
                if (result.isConfirmed) {
                  showSweetAlert('Uuuuu', 'Se encuentra usted llegando a las puertas del cielo.', (result) => {
                    if (result.isConfirmed) {
                      showSweetAlert('San Pedro', 'Sanpedrok zeruko atia zabaldu dotzu.', null);
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      showSweetAlert('Alee', 'Inpernura bidien...', null);
                    }
                  });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  showSweetAlert('ejem ejem', 'beriro?', (result) => {
                    if (result.isConfirmed) {
                      showSweetAlert('bada ordua', 'bakian utziko zaitxut?', null);
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      showSweetAlert('oiga usted', 'se esta excediento, travieso.', null);
                    }
                  });
                }
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              showSweetAlert('Benetan... ', 'Beste aukera bat emungotzut oso generosa nazelako.', (result) => {
                if (result.isConfirmed) {
                  showSweetAlert('Ei', 'Te arrepentiste de tus errores', (result) => {
                    if (result.isConfirmed) {
                      showSweetAlert('nice', 'olan bieda, zoriontasunaren bidetik zoaz.', null);
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      showSweetAlert('ale...', 'ba eze, de perdidos al rio', null);
                    }
                  });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  showSweetAlert('pos na', 'aki stamos', (result) => {
                    if (result.isConfirmed) {
                      showSweetAlert('bo', 'joan gaitezen etxera', null);
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      showSweetAlert('aspertuta habil e', 'oso aspertuta egon biar zare pike hau iteko.', null);
                    }
                  });
                }
              });
            }
          });
        }
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      showSweetAlert('Ez jat hau gustau e...', 'Bigarren aukera dauketzu hau bertan bera uzteko!', (result) => {
        if (result.isConfirmed) {
          showSweetAlert('ondo', 'ezin sinetsirik', (result) => {
            if (result.isConfirmed) {
              showSweetAlert('booof', 'te estas luciendo!', (result) => {
                if (result.isConfirmed) {
                  showSweetAlert('olan baaai', 'ikus deigun atzenengo proban...', (result) => {
                    if (result.isConfirmed) {
                      showSweetAlert('yay!', 'besidefresi (consentido) zuretzat! (ez ba dozu nahi doie de cabeza Alfiengana)', null);
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      showSweetAlert('serio?', 'horrenbeste denbora ondon ostian, oin emutentzezu botoi honi??', null);
                    }
                  });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  showSweetAlert('desio bat estu beharko baziñun?', 'zergatik izango zan diesela ta sopa zentimotan egotia? (na ensi evidentia da)', (result) => {
                    if (result.isConfirmed) {
                      showSweetAlert('SUTUTUTU', 'Honda, Subaru, Ford, Toyota, Nissan', null);
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      showSweetAlert('benetan', 'benetan espero dot mezu honeik ondo egotia jarrita, ze ez dot uste dana rebisaukotenik, porke vamos, hau aldatziak da por culo, como para comprobarlo', null);
                    }
                  });
                }
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              showSweetAlert('agian', 'ze ingo ziñun filtretan ba zan zure argazki bat... sujetadore batekin butuan, kamiseta barik, kaltzetin urdinekin, bularrian boli bic batekin margotutako esbastika bat eukita eta fraka larrosekin?', null);
            }
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          showSweetAlert('NEHIKUA DA MESEDEZ', 'zenbat denbora noie hau idazten?', (result) => {
            if (result.isConfirmed) {
              showSweetAlert('bueno', 'noixien behin ondo portetan ba zare, sikiera', (result) => {
                if (result.isConfirmed) {
                  showSweetAlert('ta dana', 'ta dana zuk bi botoi putai jotzeko, dios, que estoy haciendo con mi vida', (result) => {
                    if (result.isConfirmed) {
                      showSweetAlert('nana', 'nun eukikot kargadoria?', null);
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      showSweetAlert('ni', 'bizkotxo bat in eta komunetik botatzia produktibuaua dala esango neuke', null);
                    }
                  });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  showSweetAlert('gomendio bat', 'badauketzu gasolina kotxian?', (result) => {
                    if (result.isConfirmed) {
                      showSweetAlert('full', 'bueno, estas forrau, emmm, eres mi suggar?', null);
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      showSweetAlert('reserba', 'igual bada ordua sopa apur bat botateko ez? digo, k te kedas tirau', null);
                    }
                  });
                }
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              showSweetAlert('estoy desvariando', 'ya ez dakit zer idatzi', (result) => {
                if (result.isConfirmed) {
                  showSweetAlert('nono', 'si a lo tonto soy plata y se me cae el ojo', (result) => {
                    if (result.isConfirmed) {
                      showSweetAlert('hausnarketa', 'ez ba euketzun zure izena, zelan gustauko jatzun deitzia eta zegatik Boris?', null);
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      showSweetAlert('mi salud mental deteriora', 'ta zu botoi honei klik itentzezulako da, estarás orgulloso', null);
                    }
                  });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  showSweetAlert('buen menu', 'buen menu señor', (result) => {
                    if (result.isConfirmed) {
                      showSweetAlert('etaa', 'bazkaltzeko iten ba dot arroz txuria, petxuga eta patatita batzuk?', null);
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                      showSweetAlert('a', 'me debes pasta', null);
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
});
})