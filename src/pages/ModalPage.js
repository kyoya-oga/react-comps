import React, { Children, useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nostrum
        voluptas magni cum a repudiandae maiores neque temporibus dolore
        perferendis.
      </p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p className="mt-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        animi provident sed eveniet necessitatibus id quia. Aliquam neque omnis,
        odio qui maxime ut quae nesciunt quas eos at cupiditate reprehenderit.
        Facere obcaecati ne Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Illo, sapiente? Illo aut ducimus delectus ipsam. Eos adipisci ut
        exercitationem vitae quisquam, non enim debitis quidem rem officia a
        maiores excepturi. Mollitia et nostrum ex consequatur accusantium quia
        ducimus voluptate? Reprehenderit nemo maxime, pariatur ut, illo ea quos
        temporibus repellat sed eum laboriosam veritatis placeat provident
        officiis, vero incidunt doloremque est rem! Tenetur porro nobis
        nesciunt, commodi expedita provident ea libero ipsa itaque in doloremque
        blanditiis obcaecati magnam eius nam eaque aliquid a quis esse quia enim
        quas minima molestiae! Animi qui, quaerat voluptas illo recusandae sit
        possimus mollitia quis autem? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Aliquid porro distinctio enim, libero accusantium
        corporis reprehenderit id inventore quam ad, vero iusto ratione ipsa
        ullam perspiciatis nihil? At natus doloribus repudiandae eligendi rerum
        quidem vitae obcaecati, accusamus dolorem distinctio quas aliquam ipsum
        sit blanditiis earum laboriosam ab? Nobis id, voluptate consectetur
        autem atque rerum accusamus perferendis soluta. Ut doloremque neque
        assumenda fugit sit tempora itaque officia, ipsa veniam unde eligendi
        odit? Rerum suscipit dolorum sit quasi nihil tempora ipsum non eligendi
        expedita quos, hic vitae fuga possimus debitis cupiditate corrupti
        laborum! Odio fuga ut accusantium animi. Quam pariatur, maiores
        laboriosam tempore tenetur enim cum blanditiis provident dolor labore
        dignissimos commodi in! Eius aut totam facilis maiores nesciunt sit et.
        Soluta, labore. Repudiandae repellat perferendis voluptas maxime! Eaque
        autem dolores, temporibus quasi dolorem ullam alias! Impedit dolores
        itaque ipsa facere id error necessitatibus repudiandae temporibus,
        voluptatum mollitia rerum incidunt numquam ducimus magni quis ullam quia
        non iure cumque excepturi velit quos eaque doloribus alias! Ut dolores
        porro molestias doloremque rem adipisci magni laborum inventore, quae
        nobis voluptas, velit saepe laboriosam eaque officia. Nihil, repudiandae
        nisi asperiores ratione dicta vero dolor expedita rem eligendi esse
        veniam dolorem eaque eveniet ipsam quae suscipit atque. Fuga,
        consectetur. Obcaecati dolores sint eligendi provident dolorum nisi,
        maxime assumenda consequatur neque molestias quibusdam aliquid debitis
        ipsum optio autem a. Dignissimos odit veritatis ut, provident dolores
        perspiciatis inventore nisi officiis asperiores! Minus, nemo omnis illo
        architecto ad quod cupiditate est, facilis error nihil aliquid impedit
        animi similique porro consequatur quos, dolorum modi dicta provident
        harum numquam ea iusto quaerat esse. Autem ipsa nisi maxime nesciunt
        temporibus, eius laudantium maiores corporis sunt recusandae quos
        accusantium minima harum praesentium repudiandae, rerum atque excepturi
        dolore neque ipsam incidunt? Iure, natus, dicta est provident
        dignissimos molestias ad modi eaque, adipisci eos eligendi perspiciatis
        ullam corporis! Deserunt, quod, possimus atque perspiciatis explicabo
        maiores corrupti ut excepturi exercitationem, veniam consequuntur
        architecto magnam ipsa! Alias minima autem ab odit repellendus
        quibusdam, in perspiciatis, voluptatum, corporis fugiat eius impedit
        rerum adipisci libero mollitia consectetur! Obcaecati iste minima, culpa
        at, vero nobis recusandae veniam assumenda similique illum sunt, facere
        omnis ducimus sint dignissimos earum ad expedita voluptatem dolorum
        nihil! Itaque illo ex eius ullam dolorum beatae eos ducimus minima,
        pariatur quos esse placeat delectus iure, doloribus perferendis ut
        ratione aliquid quaerat. Officia ratione voluptatem explicabo, eligendi
        nemo quas aliquam optio fuga debitis amet ut magni iure praesentium iste
        corrupti animi temporibus tenetur! Non, porro adipisci. Odit quibusdam
        voluptatibus voluptatum dolorum perferendis esse amet quos perspiciatis?
        Provident rem excepturi totam, pariatur sit omnis possimus ducimus
        praesentium earum similique, accusamus suscipit fuga at repudiandae
        nulla incidunt! Corporis sequi molestias, facere perspiciatis, tempora
        maxime eaque deleniti iure eligendi obcaecati, numquam aliquid!
        Excepturi impedit iste tempore tempora obcaecati maiores quos fuga
        accusamus sint quia corporis rerum numquam, eos architecto doloribus
        repudiandae, provident reiciendis. Officia, laudantium? Fugit, deleniti
        laudantium autem eveniet saepe voluptatum quidem ullam sunt totam?
        Architecto, dolore quo! Modi quaerat obcaecati ipsam eaque accusamus
        consequuntur quo impedit? Voluptates cupiditate in recusandae ex
        reiciendis obcaecati quo incidunt enim, maxime repellat est
        exercitationem quisquam et reprehenderit sunt quis officiis quae
        aspernatur magnam qui, harum minima excepturi? Porro commodi eum
        aspernatur. Repudiandae quasi iusto dignissimos magnam sequi et,
        pariatur accusantium ad, necessitatibus molestiae numquam explicabo hic
        quisquam, voluptate deserunt enim consectetur deleniti esse doloremque
        sit provident ratione. A, numquam minima! Eius, voluptate minus, quos at
        iusto vero perferendis voluptates nobis suscipit est tenetur repellendus
        saepe amet quae illum sequi cumque? Suscipit perspiciatis a neque
        laborum est. Iure deleniti impedit libero. Porro quos earum odio
        adipisci quisquam repudiandae laborum qui quas fuga accusamus doloribus
        molestias facilis animi nesciunt reiciendis, quidem architecto
        voluptatum sit distinctio eaque sed omnis deleniti neque nulla.
        Accusamus illum officiis ducimus architecto rerum soluta perferendis,
        dolorem repellat molestiae omnis dolore. Quam dicta reiciendis non error
        earum nostrum, corporis perspiciatis nihil labore, soluta ullam
        excepturi totam deserunt cupiditate quia unde quo, et odio. Voluptas quo
        obcaecati odit? Dicta voluptates, repellendus aliquam voluptatibus
        pariatur atque accusantium cum delectus, necessitatibus nemo, dolores
        rem obcaecati. Minus alias vero rerum obcaecati tempora quae, iure
        praesentium dolores expedita eveniet illo repudiandae suscipit accusamus
        magni est voluptatem laudantium nihil mollitia doloribus molestiae!
        Tempore exercitationem beatae repellat sed praesentium voluptatum
        repudiandae facilis sequi earum labore atque cum reprehenderit explicabo
        doloribus expedita suscipit non, corporis quas, architecto quo sapiente
        ullam, asperiores velit. Earum amet placeat quisquam, recusandae totam
        maiores sint alias est fuga tempore harum blanditiis. Ex minus aperiam
        quaerat beatae neque omnis exercitationem asperiores facere repellendus.
        Doloribus at similique velit commodi aperiam, praesentium asperiores
        voluptates quas dolor veritatis possimus quibusdam atque iste nam sit
        ducimus aliquid illum laudantium voluptas! Ea ullam accusamus vero
        neque? Neque magni dolorum quisquam sequi eius, earum rerum provident
        corporis sit odio repellat minus porro mollitia illo tenetur distinctio?
        Distinctio officiis minus doloribus enim nostrum velit facere vero
        maiores deserunt quasi ut recusandae nesciunt, inventore ex reiciendis
        saepe omnis. Atque animi cupiditate fuga quod delectus odio suscipit
        fugit ut sapiente ipsum, pariatur nulla necessitatibus distinctio
        reiciendis assumenda. Repellat nam cumque quaerat cupiditate, tenetur
        fugiat laboriosam numquam! Nisi cum eaque neque non commodi doloribus
        culpa quod dolorum! Non enim provident architecto dicta quo accusamus
        eveniet quas earum quibusdam corporis eum facilis adipisci labore alias
        maiores delectus hic sapiente accusantium, ipsa iste consequuntur
        mollitia, nostrum dolore voluptates! Ipsum nesciunt similique, eaque et
        excepturi porro quibusdam molestias consequuntur fuga doloribus magnam
        est iure iste mollitia non architecto perferendis tempora deleniti in ab
        aut, fugiat quaerat nam? Esse dolor repudiandae nihil officia, harum
        sint recusandae consequatur, qui, deserunt perspiciatis nemo? Harum
        perferendis vitae vero totam a ipsam. Quo impedit, similique dolore iste
        maxime perferendis delectus soluta quaerat error corporis quisquam
        laboriosam maiores ullam, odio cupiditate commodi nobis voluptates,
        veritatis ipsa accusantium. Quis cum ducimus ipsam eligendi fuga magnam,
        ut corrupti vero molestias exercitationem amet commodi optio! Ipsa eum
        pariatur, obcaecati explicabo maiores enim dolore, quaerat labore
        numquam praesentium saepe consequuntur voluptatum iusto quae. Mollitia
        nesciunt similique sint, ut soluta libero, ipsa, porro nam quo ex
        commodi consectetur non nostrum.
      </p>
    </div>
  );
}

export default ModalPage;
