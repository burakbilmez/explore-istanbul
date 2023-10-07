'use client'

import { motion } from "framer-motion";
import Image from "next/image";

const Cards = () => {

      return (




            <section className="horizontal-scroll flex items-center max-md:text-xs min-h-screen">


              
                  <div className="pl-24 max-md:pl-8">
                        <div>
                              <motion.div
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-8xl text-yellow-200 ">01
                                    </motion.div>

                              <motion.h3
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-6xl mb-12 text-yellow-200 "> Galata Tower 
                                    </motion.h3>

                              <motion.p
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="mt-12">Galata Tower is a medieval stone tower in the Galata/Karaköy quarter of Istanbul, Turkey, just to the north of the Golden Horn's junction with the Bosphorus. It is a high, cone-capped cylinder that dominates the skyline and offers a panoramic vista of Istanbul's historic peninsula and its environs.
                                    </motion.p>
                        </div>
                  </div>


                  <div>
                        <div className="w-[300px] ml-12 mt-4">
                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="p-4 -mb-12">    
                                    <Image className="rounded-3xl" width={550} height={500} src="/galata-tower.webp" alt="Galata Tower" />
                              </motion.div>

                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="p-12">
                                    <Image className="rounded-3xl" width={550} height={500} src="/galata-tower-2.webp" alt="Galata Tower" />
                              </motion.div>
                        </div>
                  </div>





                  <div className="pl-[10rem]">
                        <div>
                              <motion.div
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-8xl text-yellow-200 ">02
                                    </motion.div>

                              <motion.h3
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-6xl mb-12 text-yellow-200 "> Topkapi Palace 
                                    </motion.h3>

                              <motion.p
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="mt-12">Topkapı Palace and Harem (Topkapı Sarayı) are likely to have more colourful stories than most of the world's museums put together. Libidinous sultans, ambitious courtiers, beautiful concubines and scheming eunuchs lived and worked here between the 15th and 19th centuries when it was the court of the Ottoman empire.
                                    </motion.p>
                        </div>
                  </div>


                  <div>
                        <div className="w-[300px] ml-12 mt-4">
                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="mb-6">    
                                    <Image className="rounded-3xl " width={550} height={500} src="/topkapi-palace-2.webp" alt="Topkapi Palace" />
                              </motion.div>

                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}>
                                    <Image className="rounded-3xl " width={550} height={500} src="/topkapi-palace.webp" alt="Topkapi Palace" />
                              </motion.div>
                        </div>
                  </div>




















                  <div className="pl-[10rem]">
                        <div>
                              <motion.div
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-8xl text-yellow-200 ">03
                                    </motion.div>

                              <motion.h3
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-6xl mb-12 text-yellow-200 "> Hagia Sophia 
                                    </motion.h3>

                              <motion.p
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="mt-12">
                                    Hagia Sophia is a great architectural beauty and an important monument both for Byzantine and for Ottoman Empires. Once a church, later a mosque, and now a museum at the Turkish Republic, Hagia Sophia has always been the precious of its time.
                                    </motion.p>
                        </div>
                  </div>


                  <div>
                        <div className="w-[300px] ml-12 mt-4">
                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="-mb-12 p-4">    
                                    <Image className="rounded-3xl " width={550} height={500} src="/hagia-sophia.webp" alt="Hagia Sophia " />
                              </motion.div>

                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="p-12">
                                    <Image className="rounded-3xl " width={550} height={500} src="/hagia-sophia-2.webp" alt="Hagia Sophia" />
                              </motion.div>
                        </div>
                  </div>








                  <div className="pl-[10rem]">
                        <div>
                              <motion.div
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-8xl text-yellow-200 ">04
                                    </motion.div>

                              <motion.h3
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-6xl mb-12 text-yellow-200 "> Basilica Cistern
                                    </motion.h3>

                              <motion.p
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="mt-12">
                                    The Basilica Cistern is the largest of several hundred ancient cisterns that lie beneath the city of Istanbul, Turkey. The cistern, located 500 feet southwest of the Hagia Sophia on the historical peninsula of Sarayburnu, was built in the 6th century during the reign of Byzantine Emperor Justinian I.
                                    </motion.p>
                        </div>
                  </div>


                  <div>
                        <div className="w-[300px] ml-12 mt-4">
                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="-mb-12 p-4">    
                                    <Image className="rounded-3xl " width={550} height={500} src="/basilica-2.webp" alt="Basilica Cistern" />
                              </motion.div>

                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="p-12">
                                    <Image className="rounded-3xl " width={550} height={500} src="/basilica.webp" alt="Basilica Cistern" />
                              </motion.div>
                        </div>
                  </div>












                  <div className="pl-[10rem]">
                        <div>
                              <motion.div
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-8xl text-yellow-200 ">05
                                    </motion.div>

                              <motion.h3
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-6xl mb-12 text-yellow-200 "> Blue Mosque
                                    </motion.h3>

                              <motion.p
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="mt-12">
                                    The Sultan Ahmed Mosque, also known as the Blue Mosque, is an Ottoman-era mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I.
                                    </motion.p>
                        </div>
                  </div>


                  <div>
                        <div className="w-[300px] ml-12 mt-4">
                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="-mb-8">    
                                    <Image className="rounded-3xl " width={550} height={500} src="/blue-mosque-2.webp" alt="Blue Mosque" />
                              </motion.div>

                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="mt-12">
                                    <Image className="rounded-3xl " width={550} height={500} src="/blue-mosque.webp" alt="Blue Mosque" />
                              </motion.div>
                        </div>
                  </div>









                  <div className="pl-[10rem]">
                        <div>
                              <motion.div
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-8xl text-yellow-200 ">06
                                    </motion.div>

                              <motion.h3
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-6xl mb-12 text-yellow-200 "> Grand Bazaar
                                    </motion.h3>

                              <motion.p
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="mt-12">
                                    The Grand Bazaar in Istanbul is one of the largest and oldest covered markets in the world, with 61 covered streets and over 4,000 shops on a total area of 30,700 m², attracting between 250,000 and 400,000 visitors daily.
                                    </motion.p>
                        </div>
                  </div>


                  <div>
                        <div className="w-[300px] ml-12 mt-4">
                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="-mb-12 p-4">    
                                    <Image className="rounded-3xl " width={550} height={500} src="/grand-bazaar.webp" alt="Grand Bazaar" />
                              </motion.div>

                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="p-12">
                                    <Image className="rounded-3xl " width={550} height={500} src="/grand-bazaar-2.webp" alt="Grand Bazaar" />
                              </motion.div>
                        </div>
                  </div>









                  <div className="pl-[10rem]">
                        <div>
                              <motion.div
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-8xl text-yellow-200 ">07
                                    </motion.div>

                              <motion.h3
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-6xl mb-12 text-yellow-200 ">Dolmabahce Palace
                                    </motion.h3>

                              <motion.p
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="mt-12">
                                    Dolmabahçe Palace located in the Beşiktaş district of Istanbul, Turkey, on the European coast of the Bosphorus, served as the main administrative center of the Ottoman Empire from 1856 to 1887 and 1909 to 1922.
                                    </motion.p>
                        </div>
                  </div>


                  <div>
                        <div className="w-[300px] ml-12 mt-4">
                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="-mb-12 p-4">    
                                    <Image className="rounded-3xl " width={550} height={500} src="/dolmabahce.webp" alt="Dolmabahce Palace" />
                              </motion.div>

                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="mt-12">
                                    <Image className="rounded-3xl " width={550} height={500} src="/dolmabahce-2.webp" alt="Dolmabahce Palace" />
                              </motion.div>
                        </div>
                  </div>










                  <div className="pl-[10rem]">
                        <div>
                              <motion.div
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-8xl text-yellow-200 ">08
                                    </motion.div>

                              <motion.h3
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-6xl mb-12 text-yellow-200 "> Taksim Square
                                    </motion.h3>

                              <motion.p
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="mt-12">
                                    Taksim Square, situated in Beyoğlu in the European part of Istanbul, Turkey, is a major tourist and leisure district famed for its restaurants, shops, and hotels. It is considered the heart of modern Istanbul, with the central station of the Istanbul Metro network.
                                    </motion.p>
                        </div>
                  </div>


                  <div>
                        <div className="w-[300px] ml-12 mt-4">
                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="-mb-12 p-4">    
                                    <Image className="rounded-3xl " width={550} height={500} src="/taksim-2.webp" alt="Taksim Square" />
                              </motion.div>

                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="p-12">
                                    <Image className="rounded-3xl " width={550} height={500} src="/taksim.webp" alt="Taksim Square" />
                              </motion.div>
                        </div>
                  </div>









                  <div className="pl-[10rem]">
                        <div>
                              <motion.div
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-8xl text-yellow-200 ">09
                                    </motion.div>

                              <motion.h3
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-6xl mb-12 text-yellow-200 "> Museum of Modern Art
                                    </motion.h3>

                              <motion.p
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="mt-12">
                                    Istanbul Modern, a.k.a. Istanbul Museum of Modern Art, is a museum of contemporary art in the Beyoğlu district of Istanbul, Turkey. Inaugurated on December 11, 2004, the museum focuses on artists from Turkey.
                                    </motion.p>
                        </div>
                  </div>


                  <div>
                        <div className="w-[300px] ml-12 mt-4">
                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="-mb-8">    
                                    <Image className="rounded-3xl " width={550} height={500} src="/modern-art.webp" alt="Museum of Modern Art" />
                              </motion.div>

                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="mt-12">
                                    <Image className="rounded-3xl " width={550} height={500} src="/modern-art-2.webp" alt="Museum of Modern Art" />
                              </motion.div>
                        </div>
                  </div>
















                  <div className="pl-[10rem]">
                        <div>
                              <motion.div
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-8xl text-yellow-200 ">10
                                    </motion.div>

                              <motion.h3
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="text-6xl mb-12 text-yellow-200 "> Suleymaniye Mosque 
                                    </motion.h3>

                              <motion.p
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="mt-12">
                                    The Süleymaniye Mosque is an Ottoman imperial mosque located on the Third Hill of Istanbul, Turkey. It is the second largest mosque in the city, and one of the best-known sights of Istanbul.
                                    </motion.p>
                        </div>
                  </div>


                  <div>
                        <div className="w-[300px] ml-12 mt-4 mr-24">
                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="-mb-8">    
                                    <Image className="rounded-3xl " width={550} height={500} src="/suleymaniye-mosque.webp" alt="Suleymaniye Mosque" />
                              </motion.div>

                              <motion.div
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                                    className="mt-12">
                                    <Image className="rounded-3xl " width={550} height={500} src="/suleymaniye-mosque-2.webp" alt="Suleymaniye Mosque" />
                              </motion.div>
                        </div>
                  </div>






            </section>








      );
}
export default Cards;