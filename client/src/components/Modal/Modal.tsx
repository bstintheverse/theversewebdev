// styling
import "./Modal.scss";

// components
import CloseIcon from '@mui/icons-material/Close';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
};

export default function Modal({ isOpen, onClose, videoUrl }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="modal__overlay" onClick={onClose}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <span className="modal__icon-container" onClick={onClose}>
                    <CloseIcon className="modal__icon" />
                </span>
                
                <div className="modal__video-container">
                    <video className="modal__video" controls>
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
};