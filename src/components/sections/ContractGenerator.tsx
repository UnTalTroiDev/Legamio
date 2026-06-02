import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Briefcase,
  Building,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  Home,
  Lock,
  Pencil,
  ShoppingBag,
  Users,
  type LucideIcon,
} from 'lucide-react';

import { Badge, Button, SectionWrapper } from '@/components/ui';
import type { ChipColor } from '@/components/ui';
import { cn } from '@/lib/utils';

type ContractKey =
  | 'servicios'
  | 'laboral'
  | 'arrendamiento'
  | 'sas'
  | 'confidencialidad'
  | 'compraventa';

interface ContractType {
  key: ContractKey;
  label: string;
  icon: LucideIcon;
  color: ChipColor;
  iconColor: string;
  iconBg: string;
}

const types: ContractType[] = [
  { key: 'servicios', label: 'Prestación de Servicios', icon: Briefcase, color: 'cyan', iconColor: '#21C2FF', iconBg: '#F0FBFF' },
  { key: 'laboral', label: 'Contrato Laboral', icon: Users, color: 'magenta', iconColor: '#FF6BFF', iconBg: '#FFF0FF' },
  { key: 'arrendamiento', label: 'Arrendamiento', icon: Home, color: 'yellow', iconColor: '#A88500', iconBg: '#FFFDF0' },
  { key: 'sas', label: 'Sociedad SAS', icon: Building, color: 'orange', iconColor: '#FFA200', iconBg: '#FFF8F0' },
  { key: 'confidencialidad', label: 'Confidencialidad (NDA)', icon: Lock, color: 'gray', iconColor: '#616161', iconBg: '#F5F5F5' },
  { key: 'compraventa', label: 'Compraventa', icon: ShoppingBag, color: 'cyan', iconColor: '#21C2FF', iconBg: '#F0FBFF' },
];

interface PartyData {
  nombre: string;
  documento: string;
  direccion: string;
  ciudad: string;
  email: string;
}

const emptyParty: PartyData = {
  nombre: '',
  documento: '',
  direccion: '',
  ciudad: '',
  email: '',
};

interface Details {
  objeto: string;
  valor: string;
  formaPago: string;
  lugar: string;
  duracion: number;
}

const defaultDetails: Details = {
  objeto: 'Desarrollo de sitio web corporativo y mantenimiento mensual.',
  valor: '8.000.000',
  formaPago: 'Mensualidades iguales pagaderas el día 30 de cada mes.',
  lugar: 'Bogotá D.C.',
  duracion: 6,
};

const stepLabels = ['Tipo', 'Partes', 'Detalles', 'Vista previa'];

export function ContractGenerator() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<ContractKey | null>('servicios');
  const [contratante, setContratante] = useState<PartyData>({
    ...emptyParty,
    nombre: 'Acme Colombia SAS',
    documento: '900.123.456-7',
    ciudad: 'Bogotá',
  });
  const [contratado, setContratado] = useState<PartyData>({
    ...emptyParty,
    nombre: 'Juan Pérez',
    documento: '1.020.345.678',
    ciudad: 'Medellín',
  });
  const [details, setDetails] = useState<Details>(defaultDetails);

  const canAdvance = useMemo(() => {
    if (step === 0) return !!selected;
    if (step === 1) {
      const v = (p: PartyData) =>
        p.nombre && p.documento && p.ciudad && /.+@.+\..+/.test(p.email || 'a@a.co');
      return v(contratante) && v(contratado);
    }
    if (step === 2) return !!details.objeto && !!details.valor;
    return true;
  }, [step, selected, contratante, contratado, details]);

  return (
    <SectionWrapper id="contratos" background="white">
      <div className="mx-auto max-w-2xl text-center mb-10">
        <Badge variant="cyan" className="text-base! px-4! py-1.5!">Generador inteligente</Badge>
        <h2 className="font-display mt-5 text-[32px] md:text-[46px] font-medium text-[#1A1A1A] leading-[1.05] tracking-tight">
          Crea tu documento en{' '}
          <span className="font-display-italic font-normal">minutos</span>
        </h2>
        <p className="mt-3 text-lg font-light text-[#616161]">
          Sin tecnicismos, sin esperas. Solo describe lo que necesitas.
        </p>
      </div>

      <div className="mx-auto max-w-[800px] rounded-3xl bg-white border border-[#E8E8E8] shadow-[0_16px_48px_rgba(0,0,0,0.14)] overflow-hidden">
        {/* Progress */}
        <div className="px-6 md:px-10 pt-8 pb-6 border-b border-[#F0F0F0]">
          <ol className="flex items-center gap-2">
            {stepLabels.map((label, i) => {
              const completed = i < step;
              const active = i === step;
              return (
                <li key={label} className="flex items-center gap-2 flex-1">
                  <div
                    className={cn(
                      'grid size-9 place-items-center rounded-full border text-xs font-bold shrink-0 transition-colors',
                      completed && 'bg-[#21C2FF] border-[#21C2FF] text-white',
                      active && !completed && 'bg-[#21C2FF] border-[#21C2FF] text-white shadow-[0_4px_12px_rgba(33,194,255,0.30)]',
                      !active && !completed && 'border-[#E8E8E8] bg-white text-[#757575]',
                    )}
                    aria-current={active ? 'step' : undefined}
                  >
                    {completed ? <Check className="size-4" strokeWidth={3} /> : i + 1}
                  </div>
                  <span
                    className={cn(
                      'text-sm hidden sm:inline',
                      active ? 'font-bold text-[#1A1A1A]' : 'text-[#757575]',
                    )}
                  >
                    {label}
                  </span>
                  {i < stepLabels.length - 1 && (
                    <span
                      className={cn(
                        'flex-1 h-px',
                        completed ? 'bg-[#21C2FF]' : 'bg-[#E8E8E8]',
                      )}
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="px-6 md:px-10 py-8"
            >
              {step === 0 && (
                <StepType selected={selected} onSelect={setSelected} />
              )}
              {step === 1 && (
                <StepParties
                  contratante={contratante}
                  contratado={contratado}
                  setContratante={setContratante}
                  setContratado={setContratado}
                />
              )}
              {step === 2 && (
                <StepDetails details={details} setDetails={setDetails} />
              )}
              {step === 3 && (
                <StepPreview
                  type={types.find((t) => t.key === selected)?.label || 'Contrato'}
                  contratante={contratante}
                  contratado={contratado}
                  details={details}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between border-t border-[#F0F0F0] px-6 md:px-10 py-5 bg-[#F8F8F8]">
          <Button
            variant="ghost"
            size="md"
            leftIcon={<ChevronLeft className="size-4" />}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            Anterior
          </Button>
          {step < stepLabels.length - 1 ? (
            <Button
              variant="primary"
              size="md"
              rightIcon={<ChevronRight className="size-4" />}
              onClick={() => setStep((s) => s + 1)}
              disabled={!canAdvance}
            >
              Siguiente
            </Button>
          ) : (
            <Button
              variant="primary"
              size="md"
              leftIcon={<Download className="size-4" />}
            >
              Descargar PDF
            </Button>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

function StepType({
  selected,
  onSelect,
}: {
  selected: ContractKey | null;
  onSelect: (k: ContractKey) => void;
}) {
  return (
    <div>
      <h3 className="text-lg font-bold text-[#1A1A1A]">¿Qué contrato necesitas?</h3>
      <p className="text-sm text-[#616161] mt-1">
        Selecciona el tipo más cercano a tu situación.
      </p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
        {types.map(({ key, label, icon: Icon, iconColor, iconBg }) => {
          const isSelected = selected === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onSelect(key)}
              className={cn(
                'relative rounded-2xl border p-4 text-left transition-all',
                isSelected
                  ? 'border-2 border-[#21C2FF] bg-[#F0FBFF] shadow-[0_4px_12px_rgba(33,194,255,0.18)]'
                  : 'border-[#E8E8E8] bg-white hover:border-[#21C2FF]/40',
              )}
              aria-pressed={isSelected}
            >
              {isSelected && (
                <span className="absolute top-2.5 right-2.5 grid size-5 place-items-center rounded-full bg-[#21C2FF] text-white">
                  <Check className="size-3" strokeWidth={3} />
                </span>
              )}
              <span
                className="grid size-10 place-items-center rounded-xl mb-3"
                style={{ backgroundColor: iconBg, color: iconColor }}
              >
                <Icon className="size-5" />
              </span>
              <p className="text-sm font-bold text-[#1A1A1A] leading-snug">{label}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PartyForm({
  title,
  data,
  setData,
}: {
  title: string;
  data: PartyData;
  setData: (d: PartyData) => void;
}) {
  const set = (k: keyof PartyData) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [k]: e.target.value });

  const emailValid = !data.email || /.+@.+\..+/.test(data.email);

  return (
    <div className="flex flex-col gap-3.5">
      <h4 className="text-sm font-bold text-[#1A1A1A]">{title}</h4>
      <Input label="Nombre completo / Razón social" value={data.nombre} onChange={set('nombre')} required />
      <Input label="NIT / Cédula" value={data.documento} onChange={set('documento')} required />
      <Input label="Dirección" value={data.direccion} onChange={set('direccion')} />
      <Input label="Ciudad" value={data.ciudad} onChange={set('ciudad')} required />
      <Input
        label="Email"
        type="email"
        value={data.email}
        onChange={set('email')}
        error={!emailValid ? 'Email inválido' : undefined}
      />
    </div>
  );
}

function StepParties({
  contratante,
  contratado,
  setContratante,
  setContratado,
}: {
  contratante: PartyData;
  contratado: PartyData;
  setContratante: (d: PartyData) => void;
  setContratado: (d: PartyData) => void;
}) {
  return (
    <div>
      <h3 className="text-lg font-bold text-[#1A1A1A]">Partes del contrato</h3>
      <p className="text-sm text-[#616161] mt-1">
        Datos de las personas o empresas que firmarán.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <PartyForm title="Contratante" data={contratante} setData={setContratante} />
        <PartyForm title="Contratado" data={contratado} setData={setContratado} />
      </div>
    </div>
  );
}

function StepDetails({
  details,
  setDetails,
}: {
  details: Details;
  setDetails: (d: Details) => void;
}) {
  return (
    <div>
      <h3 className="text-lg font-bold text-[#1A1A1A]">Detalles específicos</h3>
      <p className="text-sm text-[#616161] mt-1">
        Ajusta las cláusulas clave de tu contrato.
      </p>
      <div className="mt-6 flex flex-col gap-4">
        <Field label="Objeto del contrato">
          <textarea
            value={details.objeto}
            onChange={(e) => setDetails({ ...details, objeto: e.target.value })}
            rows={3}
            className="w-full resize-none rounded-lg border border-[#E8E8E8] bg-white px-3 py-2.5 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#21C2FF]"
          />
        </Field>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Valor (COP)">
            <div className="flex items-center rounded-lg border border-[#E8E8E8] bg-white px-3 focus-within:border-[#21C2FF]">
              <span className="text-sm text-[#757575] mr-1">$</span>
              <input
                value={details.valor}
                onChange={(e) => setDetails({ ...details, valor: e.target.value })}
                className="w-full py-2.5 text-sm text-[#1A1A1A] outline-none bg-transparent"
              />
            </div>
          </Field>
          <Field label="Lugar de ejecución">
            <input
              value={details.lugar}
              onChange={(e) => setDetails({ ...details, lugar: e.target.value })}
              className="w-full rounded-lg border border-[#E8E8E8] bg-white px-3 py-2.5 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#21C2FF]"
            />
          </Field>
        </div>

        <Field label="Forma de pago">
          <input
            value={details.formaPago}
            onChange={(e) => setDetails({ ...details, formaPago: e.target.value })}
            className="w-full rounded-lg border border-[#E8E8E8] bg-white px-3 py-2.5 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#21C2FF]"
          />
        </Field>

        <Field label={`Duración: ${details.duracion} ${details.duracion === 1 ? 'mes' : 'meses'}`}>
          <input
            type="range"
            min={1}
            max={36}
            value={details.duracion}
            onChange={(e) =>
              setDetails({ ...details, duracion: Number(e.target.value) })
            }
            className="legamio-range w-full accent-[#21C2FF]"
          />
          <div className="flex justify-between text-[11px] text-[#757575] mt-1">
            <span>1 mes</span>
            <span>36 meses</span>
          </div>
        </Field>
      </div>
    </div>
  );
}

function StepPreview({
  type,
  contratante,
  contratado,
  details,
}: {
  type: string;
  contratante: PartyData;
  contratado: PartyData;
  details: Details;
}) {
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h3 className="text-lg font-bold text-[#1A1A1A]">Vista previa del contrato</h3>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" leftIcon={<Pencil className="size-3.5" />}>
            Editar
          </Button>
          <Button variant="ghost" size="sm" leftIcon={<Copy className="size-3.5" />}>
            Copiar
          </Button>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-[#E8E8E8] bg-white p-7 max-h-[420px] overflow-y-auto">
        <div className="border-b border-[#E8E8E8] pb-4 mb-5">
          <p className="text-[11px] uppercase tracking-[2px] text-[#757575]">
            República de Colombia · Documento privado
          </p>
          <h4 className="mt-1 text-xl font-bold text-[#1A1A1A]">
            {type.toUpperCase()}
          </h4>
        </div>

        <p className="text-[14px] leading-relaxed text-[#1A1A1A]">
          Entre los suscritos, <strong>{contratante.nombre || '____________'}</strong>{' '}
          identificado(a) con NIT/CC <strong>{contratante.documento || '____'}</strong>{' '}
          domiciliado(a) en <strong>{contratante.ciudad || '____'}</strong>{' '}
          quien en adelante se denominará el <strong>CONTRATANTE</strong>, y{' '}
          <strong>{contratado.nombre || '____________'}</strong> identificado(a)
          con NIT/CC <strong>{contratado.documento || '____'}</strong> domiciliado(a)
          en <strong>{contratado.ciudad || '____'}</strong>, quien en adelante se
          denominará el <strong>CONTRATADO</strong>, se ha acordado celebrar el
          presente contrato, regido por las siguientes cláusulas:
        </p>

        <h5 className="mt-5 font-bold text-[#1A1A1A]">PRIMERA — OBJETO</h5>
        <p className="text-[14px] mt-1.5 leading-relaxed text-[#616161]">
          {details.objeto}
        </p>

        <h5 className="mt-4 font-bold text-[#1A1A1A]">SEGUNDA — VALOR Y FORMA DE PAGO</h5>
        <p className="text-[14px] mt-1.5 leading-relaxed text-[#616161]">
          El valor total del presente contrato es de{' '}
          <strong>${details.valor} COP</strong>. {details.formaPago}
        </p>

        <h5 className="mt-4 font-bold text-[#1A1A1A]">TERCERA — DURACIÓN</h5>
        <p className="text-[14px] mt-1.5 leading-relaxed text-[#616161]">
          El presente contrato tendrá una duración de{' '}
          <strong>
            {details.duracion} {details.duracion === 1 ? 'mes' : 'meses'}
          </strong>
          , contados a partir de la firma del mismo.
        </p>

        <h5 className="mt-4 font-bold text-[#1A1A1A]">CUARTA — LUGAR DE EJECUCIÓN</h5>
        <p className="text-[14px] mt-1.5 leading-relaxed text-[#616161]">
          Las actividades objeto del contrato se ejecutarán en{' '}
          <strong>{details.lugar}</strong>.
        </p>

        <p className="mt-6 text-[12px] italic text-[#757575]">
          Generado por Legamio · Revisa con un abogado antes de firmar.
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm text-[#616161]">{label}</span>
      {children}
    </label>
  );
}

interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
  error?: string;
}

function Input({ label, value, onChange, required, type = 'text', error }: InputProps) {
  const filled = value.trim().length > 0;
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm text-[#616161]">
        {label} {required && <span className="text-[#FF6BFF]">*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={cn(
          'rounded-lg border bg-white px-3 py-2.5 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#21C2FF]',
          error
            ? 'border-red-400'
            : filled
              ? 'border-emerald-300'
              : 'border-[#E8E8E8]',
        )}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  );
}

export default ContractGenerator;
